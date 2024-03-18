"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import io from 'socket.io-client';
import { FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

const GuideChatComponent = () => {
    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [notificationPermission, setNotificationPermission] = useState(false);
    const [chats, setChats] = useState([]);
    const socket = io('http://localhost:3001');
    const tourGuideNames = ["Haris","Neeraj"];


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

    useEffect(() => {
        if (sender) {
            axios.get(`http://localhost:3001/chats/senders/${sender}`)
                .then((response) => {
                    setChats(response.data.senders);
                    console.log(response.data.senders);
                })
                .catch((error) => {
                    console.error('Error fetching chats:', error);
                });
        }
    }, [sender]);


    useEffect(() => {
        socket.on('new message', (data) => {
            console.log('Received message:', data);
            if (data.receiver === sender || data.sender === sender) {
                setMessages((prevMessages) => [...prevMessages, data]);
                if (notificationPermission) {
                    new Notification('New Message', {
                        body: `You have received a new message from ${data.sender}`,
                    });
                }
            }
        });
        return () => {
            socket.off('new message');
        };
    }, [sender, notificationPermission]);

    const fetchMessages = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/chats/${sender}/${receiver}`);
            setMessages(response.data.chats);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const sendMessage = async () => {
        try {
            await axios.post('http://localhost:3001/api/chats', {
                sender,
                receiver,
                message: newMessage,
            });
            setNewMessage('');
            fetchMessages();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, [sender, receiver]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        console.log('Sending message:', newMessage);
        console.log('Sender:', sender);
        console.log('Receiver:', receiver);
    }

    return (
        <div className="flex flex-col h-full">
            {/* <select
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
                className="p-4 border-b"
            >
                <option value="">Select a tour guide</option>
                {chats.map((chat, index) => (
                    <option key={index} value={chat}>{chat}</option>
                ))}
            </select> */}
            {chats && chats.length > 0 ? (
                <div
                className='border-b'
                >
                    <h1
                        className='
                        text-2xl text-blue-500'
                    >Start Chat with:</h1>
                    <select
                        value={receiver}
                        onChange={(e) => setReceiver(e.target.value)}
                        className="p-4 border-b"
                    >
                        <option value="">Select a tour guide</option>
                        {chats.map((chat, index) => (
                            <option key={index} value={chat}>{chat}</option>
                        ))}
                    </select>
                </div>
            ) : (
                <div>Loading chats...</div>
            )}

            <div className="flex-grow overflow-auto">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`
                            p-4
                            ${message.sender === sender ? 'text-left' : 'text-right'}
                            ${message.sender === sender ? 'bg-blue-100' : 'bg-gray-100'}
                            ${message.sender === sender ? 'ml-auto' : ''}
                            rounded-md
                            my-1
                        `}
                    >
                        <p className="text-sm font-bold">{
                            message.sender === sender ? 'You' : message.sender

                        }</p>
                        <p>{message.message}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between p-4 border-t my-20">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-4 py-2 mr-2 rounded-md border focus:outline-none focus:border-blue-500"
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default GuideChatComponent;
