"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { api } from "@/services/api"
import toast from "react-hot-toast"
import { Eye, EyeOff, Shield } from "lucide-react"

export function LoginForm() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || !password) {
            toast.error("Silakan isi email dan kata sandi")
            return
        }

        setLoading(true)
        try {
            // Call the login endpoint
            const res = await api.post<any, any>("/api/v1/auth/login", {
                email,
                password,
            })

            // Store credentials in localStorage
            localStorage.setItem("token", res.access_token)
            localStorage.setItem("refreshToken", res.refresh_token)
            localStorage.setItem("user", JSON.stringify(res.user))

            toast.success(`Selamat datang, ${res.user.name}!`)

            // Redirect to dashboard with a clean refresh
            window.location.href = "/dashboard"
        } catch (err: any) {
            toast.error(err.message || "Gagal masuk. Periksa kembali email & kata sandi Anda.")
        } finally {
            setLoading(false)
        }
    }

    // Auto-redirect if already authenticated
    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token")
            if (token) {
                router.replace("/dashboard")
            }
        }
    }, [router])

    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white h-full w-full">
            <div className="mx-auto grid w-full max-w-[400px] gap-6">
                <div className="grid gap-2 text-left">
                    {/*<div className="flex items-center gap-2 mb-6 text-[#111111]">
                        <span className="font-bold tracking-wide text-[22px] flex items-center">
                            Awas
                        </span>
                    </div>*/}

                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Masuk Akun
                    </h1>

                    <p className="text-[14px] text-gray-500">
                        Belum punya akun? <a href="/register" className="font-semibold text-[#111111] hover:text-[#f15c12] underline underline-offset-2 transition-colors">Daftar di sini</a>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Masukkan email Anda"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            className="bg-gray-50 border-gray-200"
                            required
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">
                            Kata Sandi
                        </Label>
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                                className="bg-gray-50 border-gray-200 pr-10"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                disabled={loading}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer flex items-center justify-center"
                                aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-[46px] bg-[#f15c12] hover:bg-[#d44805] text-white rounded-[10px] text-[15px] font-medium mt-2 transition-colors shadow-md shadow-[#f15c12]/20 hover:shadow-lg border-0 cursor-pointer"
                    >
                        {loading ? "Memproses..." : "Masuk Sekarang"}
                    </Button>
                </form>
            </div>
        </div>
    )
}
