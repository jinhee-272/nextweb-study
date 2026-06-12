// app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css'

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}