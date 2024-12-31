"use client"; // Add this directive to mark the component as a Client Component

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';

const ChatOptionsCard: React.FC = () => {
  const handleProductChatClick = () => {
    window.location.href = 'https://flowise-render-test-tpi3.onrender.com/chatbot/a0cc1c42-a8df-47ae-825c-cb10fee4e326';
  };

  const handleEmployeeChatClick = () => {
    // Add your logic for Employee Chat here
    console.log('Employee Chat clicked');
  };

  return (
    <div className="flex gap-4">
      <Card className="w-[350px] shadow-lg">
        <CardHeader>
          <CardTitle>Product Chatbot</CardTitle>
          <CardDescription>Chat with our product assistant.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full bg-blue-800" onClick={handleProductChatClick}>
            Start Product Chat
          </Button>
        </CardContent>
      </Card>

      <Card className="w-[350px] shadow-lg">
        <CardHeader>
          <CardTitle>Employee Chatbot</CardTitle>
          <CardDescription>Chat with our employee assistant.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full bg-blue-800" onClick={handleEmployeeChatClick}>
            Start Employee Chat
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatOptionsCard;