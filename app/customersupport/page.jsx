"use client";

import { useState, useEffect } from 'react';
import { BsChatLeftDots } from "react-icons/bs";
import axios from 'axios';
import io from 'socket.io-client';
import { LuSend } from "react-icons/lu";
import { toast } from 'react-toastify';
import { GiCancel } from "react-icons/gi";

const CustomerSupport = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [question, setQuestion] = useState('');
    const [sender, setSender] = useState('');
    const receiver = 'support';
    const [messages, setMessages] = useState([]);
    const socket = io('http://localhost:3001');


    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const dummyQuestions = [
        'I have some issues regarding my profile',
        'I have an issue regarding hiring a tour guide',
        'I want to submit a complaint'
    ];

    useEffect(() => {
        const userEmail = localStorage.getItem('email');
        if (userEmail) {
            axios.get(`http://localhost:3001/users/${userEmail}`)
                .then((response) => {
                    setSender(response.data.user.username);
                    console.log('User:', response.data);
                })
                .catch((error) => {
                    console.error('Error fetching user:', error);
                });
        }
    }, []);

    const sendMessage = async () => {
        try {
            if (!question) {
                toast.error('Please enter a question');
                return;
            }
            console.log('new message:', question);
            const response = await axios.post('http://localhost:3001/api/support', {
                sender,
                receiver,
                message: question,
            });
            console.log('Message sent:', response.data);
            socket.emit('new message', {
                sender,
                receiver,
                message: question,
            });
            toast.success('Message sent successfully');
            setQuestion('');
        } catch (error) {
            toast.error('Error sending message');
            console.error('Error sending message:', error);
        }
    };

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/support/${sender}`);
                setMessages(response.data.support);
                console.log('Messages:', response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        }
        fetchMessages();
    }, [sender]);

    return (
        <div>
            <button onClick={toggleModal} className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
            z-[1000]
            ">
                <BsChatLeftDots size={20} />
            </button>
            {isOpen && (
                <div className="fixed top-0 right-0 w-full sm:w-[500px] h-full flex items-center justify-center flex-wrap gap-4 z-[500]">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Customer Support</h2>
                        <p className="mb-4">Please enter your question below:</p>
                        {
                            dummyQuestions.map((question, index) => (
                                <button key={index} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mr-2 mb-2 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-500"
                                    onClick={(e) => setQuestion(e.target.textContent)}
                                >
                                    {question}
                                </button>
                            ))
                        }
                        <input
                            type="text"
                            className="w-full h-12 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-none focus:ring-blue-500 mt-4"
                            placeholder="Enter your question here" value={question} onChange={(e) => setQuestion(e.target.value)}
                        />
                        <div className="flex justify-between mt-4">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={sendMessage}
                            >
                                <LuSend size={20} />
                            </button>
                            <button onClick={toggleModal} className="px-2 py-1 
                            absolute top-12 right-0 m-4
                            ">
                                <GiCancel size={24}
                                    className='text-blue-400 font-bold'
                                />
                            </button>
                        </div>

                        {/* previous messages */}
                        {
                            messages.length === 0 ? (
                                <div className="bg-white p-2 rounded-lg w-full sm:w-[450px]
                                h-[300px] overflow-y-auto mt-4
                                ">
                                    <p className="text-center text-gray-500">No previous messages</p>
                                </div>
                            )
                                : (
                                    <div className="bg-white p-2 rounded-lg shadow-lg w-full sm:w-[460px]
                        h-[300px] overflow-y-auto mt-4
                        ">
                                        <h2 className="text-xl font-bold my-4">Previous Messages</h2>
                                        {messages.map((message, index) => (
                                            <div
                                                key={index}
                                                className={`
                                    ${message.sender === sender ? 'text-left' : 'text-right'}
                                    ${message.sender === sender ? 'bg-blue-100' : 'bg-gray-100'}
                                    ${message.sender === sender ? 'ml-auto' : ''}
                                    rounded-md
                                    my-2
                                    p-2
                                `}
                                            >
                                                <p className="text-sm font-bold">{
                                                    message.sender === sender ? 'You' : message.sender

                                                }</p>
                                                <p>{message.question}</p>
                                            </div>
                                        ))}

                                    </div>
                                )
                        }

                    </div>
                </div>

            )}
        </div>
    );
};

export default CustomerSupport;
