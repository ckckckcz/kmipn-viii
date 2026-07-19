import { LoginForm } from "@/features/auth/components/LoginForm"

export default function LoginPage() {
    return (
        <div className="w-full min-h-screen grid lg:grid-cols-2 bg-white">
            <LoginForm />
            <div className="hidden bg-slate-950 lg:block relative overflow-hidden h-full min-h-screen">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&fit=crop&q=80"
                        alt="Safety Compliance Monitoring"
                        className="absolute inset-0 w-full h-full object-cover opacity-45 grayscale contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
                </div>

                <div className="absolute bottom-12 left-12 right-12 text-white z-20">
                    <div className="flex -space-x-3 mb-4">
                        {["aidan", "caleb", "avery", "brian"].map((seed) => (
                            <div key={seed} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-gray-200 overflow-hidden relative">
                                <img
                                    src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${seed}`}
                                    alt={`Avatar ${seed}`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}
                        <div className="h-10 px-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center text-xs font-semibold">
                            Dipercaya oleh 10rb+ Pekerja
                        </div>
                    </div>
                    <h2 className="text-5xl font-medium tracking-tight mb-3 leading-tight">
                        Pengawasan K3 Cerdas,<br /> Lindungi Setiap Langkah.
                    </h2>
                    <p className="text-gray-300 font-light text-md max-w-lg leading-relaxed">
                        Masuk ke portal Awas untuk memantau kepatuhan APD secara real-time, mengelola log akses gerbang, dan meminimalkan insiden keselamatan kerja.
                    </p>
                </div>
            </div>
        </div>
    )
}
