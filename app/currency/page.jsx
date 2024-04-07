"use client";

// components/CurrencyConverter.js
import { useState, useEffect } from 'react';
import currencyFormatter from 'currency-formatter';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [rates, setRates] = useState({});
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency.toLowerCase()}.json`);
                const data = await response.json();
                setRates(data[fromCurrency.toLowerCase()]);
                console.log(rates);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };

        fetchRates();
    }, [fromCurrency]);

    useEffect(() => {
        if (!!rates) {
            const toRate = rates[toCurrency.toLowerCase()];
            const converted = (amount * toRate);
            setConvertedAmount(converted);
        }
    }, [amount, toCurrency, rates]);

    return (
        <div>
            <input
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
            <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                {/* Add more currency options as needed */}
            </select>
            <span>to</span>
            <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                {/* Add more currency options as needed */}
            </select>
            <p>
                {currencyFormatter.format(convertedAmount, { code: toCurrency })}
            </p>
        </div>
    );
};

export default CurrencyConverter;