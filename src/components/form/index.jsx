import { useState } from "react";

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Mensagem:', message);
        
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div id="contact" className="flex mb-16 justify-center mt-8 bg-white">
            <div className="max-w-lg w-full">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label htmlFor="name" className="mb-2">
                        Nome:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border bg-white rounded-md p-2 mb-4"
                    />
                    
                    <label htmlFor="email" className="mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border bg-white rounded-md p-2 mb-4"
                    />
                    
                    <label htmlFor="message" className="mb-2">
                        Mensagem:
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="border bg-white rounded-md p-2 mb-4"
                        rows="4"
                    />

                    <button type="submit" className="bg-black text-white rounded-md p-2">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}
