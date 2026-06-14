// app/layout.jsx
import CustomCursor from '../components/CustomCursor'; // adjust path as needed
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      {/* 
        The 'cursor-none' class hides the default pointer, 
        but we wrap it in a custom fine-pointer check in globals.css 
      */}
      <body className="antialiased hide-native-cursor">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}