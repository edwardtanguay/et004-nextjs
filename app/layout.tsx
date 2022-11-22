import "../styles/globals.css";
import Header from "./Header";

interface IProps {
  children: React.ReactNode 
}

export default function RootLayout({children}: IProps) {
  return (
    <html>
      <head />
      <body>
        <Header/>
        <div className="p-5">
        {children}
        </div>
      </body>
    </html>
  )
}
