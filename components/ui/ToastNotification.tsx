"use client"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

export default function ToastNotification() {
    return (
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}