"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  AlertCircle,
  Book,
  ExternalLink,
  Send,
} from "lucide-react";
import { useState } from "react";

export function SupportContent() {
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketMessage, setTicketMessage] = useState("");

  const handleSubmitTicket = () => {
    // Handle ticket submission logic here
    console.log("Ticket submitted:", { ticketSubject, ticketMessage });
    setTicketSubject("");
    setTicketMessage("");
  };

  const supportChannels = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      action: "Start Chat",
      href: "#",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24h",
      action: "Send Email",
      href: "mailto:support@bitmopay.com",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      availability: "Mon-Fri 9AM-6PM",
      action: "Call Now",
      href: "tel:+1234567890",
    },
  ];

  const recentTickets = [
    {
      id: "#SUP-001",
      subject: "API Integration Issue",
      status: "In Progress",
      date: "June 14, 2025",
      priority: "High",
    },
    {
      id: "#SUP-002",
      subject: "Transaction Webhook Problem",
      status: "Resolved",
      date: "June 12, 2025",
      priority: "Medium",
    },
    {
      id: "#SUP-003",
      subject: "Account Verification",
      status: "Pending",
      date: "June 10, 2025",
      priority: "Low",
    },
  ];

  const faqItems = [
    {
      question: "How do I integrate BitMoPay with my website?",
      answer:
        "You can integrate BitMoPay using our REST API, webhooks, or pre-built plugins for popular platforms like WooCommerce, Shopify, and Magento. Check our documentation for step-by-step guides.",
    },
    {
      question: "What cryptocurrencies does BitMoPay support?",
      answer:
        "We support major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Tether (USDT), USD Coin (USDC), Binance Coin (BNB), Solana (SOL), and Tron (TRX).",
    },
    {
      question: "How long do cryptocurrency transactions take to confirm?",
      answer:
        "Transaction confirmation times vary by blockchain. Bitcoin typically takes 10-60 minutes, Ethereum 1-5 minutes, and faster blockchains like Solana take seconds.",
    },
    {
      question: "What are your transaction fees?",
      answer:
        "Our fees are competitive and transparent. Processing fees start at 1% per transaction, with lower rates available for high-volume merchants. Check our pricing page for detailed information.",
    },
    {
      question: "How do I set up webhook notifications?",
      answer:
        "You can configure webhooks in your dashboard settings. Go to Settings > API Keys > Webhooks and add your endpoint URL. We'll send real-time notifications for payment events.",
    },
  ];

  const quickLinks = [
    {
      title: "API Documentation",
      href: "/api-reference",
      icon: Book,
    },
    {
      title: "Integration Guides",
      href: "/documentation",
      icon: Book,
    },
    {
      title: "Status Page",
      href: "#",
      icon: ExternalLink,
    },
    {
      title: "Community Forum",
      href: "#",
      icon: ExternalLink,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <HelpCircle className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Help & Support</h1>
      </div>

      {/* Support Channels */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {supportChannels.map((channel, index) => (
          <Card key={index} className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900">
                  <channel.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-lg">{channel.title}</CardTitle>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{channel.availability}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">{channel.description}</p>
              <Button asChild className="w-full">
                <a href={channel.href}>{channel.action}</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Create Support Ticket */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Create Support Ticket</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Subject</label>
                <Input
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  placeholder="Brief description of your issue"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  value={ticketMessage}
                  onChange={(e) => setTicketMessage(e.target.value)}
                  placeholder="Provide detailed information about your issue..."
                  rows={6}
                />
              </div>
              <Button onClick={handleSubmitTicket} className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Submit Ticket
              </Button>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Tickets */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Tickets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentTickets.map((ticket, index) => (
                <div key={index}>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{ticket.id}</p>
                      <p className="text-sm text-muted-foreground">{ticket.subject}</p>
                      <p className="text-xs text-muted-foreground">{ticket.date}</p>
                    </div>
                    <div className="space-y-1">
                      <Badge
                        variant={
                          ticket.status === "Resolved"
                            ? "default"
                            : ticket.status === "In Progress"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {ticket.status === "Resolved" && <CheckCircle className="mr-1 h-3 w-3" />}
                        {ticket.status === "In Progress" && (
                          <AlertCircle className="mr-1 h-3 w-3" />
                        )}
                        {ticket.status}
                      </Badge>
                      <Badge
                        variant={
                          ticket.priority === "High"
                            ? "destructive"
                            : ticket.priority === "Medium"
                              ? "secondary"
                              : "outline"
                        }
                        className="block text-xs"
                      >
                        {ticket.priority}
                      </Badge>
                    </div>
                  </div>
                  {index < recentTickets.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickLinks.map((link, index) => (
                <Button key={index} variant="ghost" asChild className="w-full justify-start">
                  <a href={link.href}>
                    <link.icon className="mr-2 h-4 w-4" />
                    {link.title}
                  </a>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">support@bitmopay.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">24/7 Support Available</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
