import { createContext, useEffect, useState, } from "react"
import axios from 'axios'
import { rooturl } from "../config/api.js";




export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)
    const register = async (formData) => {
        try {
            const res = await axios.post(`${rooturl}/api/auth/register`, formData, {
                withCredentials: true
            })
            setUser(res.data.newUser)
            return res.data
        } catch (err) {
            console.log("error", err);
            throw err

        }

    }
    const login = async (formData) => {
        try {
            // console.log("Sending:", formData);
            const res = await axios.post(`${rooturl}/api/auth/login`, formData, {
                withCredentials: true
            })
            setUser(res.data.newUser)
            return res.data
        } catch (err) {
            console.log(err);
            throw err

        }
    }
    const logout = async () => {
        try {
            await axios.get(
                `${rooturl}/api/auth/logout`,
                { withCredentials: true }
            );

            setUser(null);
        } catch (err) {
            console.log("Logout error:", err);
        }
    };
    const profile = async () => {
        try {
            const res = await axios.get(`${rooturl}/api/auth/profile`,
                {
                    withCredentials: true
                }
            )
            setUser(res.data.user)
            return res.data
        } catch (err) {
            console.log(err)
            throw err
        }
    }
    const checkAuth = async () => {
        try {

            const response = await axios.get(
                `${rooturl}/api/auth/profile`,
                {
                    withCredentials: true
                }
            );


            setUser(response.data.user);

        } catch (error) {
            console.log("3. PROFILE ERROR:", error);
            console.log("4. SERVER RESPONSE:", error.response?.data);
            console.log("5. STATUS:", error.response?.status);

            setUser(null);
        } finally {
            setLoding(false);
        }
    };
    useEffect(() => {
        checkAuth();
    }, []);
    useEffect(() => {
    }, [user]);
    return (

        <AuthContext.Provider
            value={{ user, setUser, loading, register, login, logout, profile }}>
            {children}
        </AuthContext.Provider>
    )
}