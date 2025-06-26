"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  HelpCircle,
  MessageSquare,
  Clock,
  CheckCircle2,
  AlertCircle,
  Send,
  Search,
  Plus,
  FileText,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

const SupportPage = () => {
  const [ticketForm, setTicketForm] = useState({
    subject: "",
    category: "",
    priority: "",
    description: "",
    email: "",
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Ticket submitted:", ticketForm);
    // Handle ticket submission logic here
  };

  const handleInputChange = (field: string, value: string) => {
    setTicketForm({
      ...ticketForm,
      [field]: value,
    });
  };

  const mockTickets = [
    {
      id: "TK-001",
      subject: "Login Issues",
      status: "Open",
      priority: "High",
      created: "2025-01-15",
      category: "Technical",
    },
    {
      id: "TK-002",
      subject: "Prediction Accuracy Question",
      status: "In Progress",
      priority: "Medium",
      created: "2025-01-14",
      category: "General",
    },
    {
      id: "TK-003",
      subject: "Billing Inquiry",
      status: "Resolved",
      priority: "Low",
      created: "2025-01-13",
      category: "Billing",
    },
  ];

  const faqItems = [
    {
      question: "How accurate are your predictions?",
      answer: "Our AI-powered predictions have an average accuracy rate of 85-90% across different sports. The accuracy varies based on the sport, teams involved, and available data.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.",
    },
    {
      question: "What sports do you cover?",
      answer: "We currently provide predictions for Cricket, Football (Soccer), and Tennis. We're constantly working to add more sports to our platform.",
    },
    {
      question: "How do I upgrade my plan?",
      answer: "You can upgrade your plan from the pricing section in your account dashboard. The upgrade takes effect immediately.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-red-100 text-red-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Support Center
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get help with your SportPredict account, submit tickets, and find answers to common questions
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Submit a Ticket</h3>
              <p className="text-muted-foreground text-sm">
                Get personalized help from our support team
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <HelpCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Browse FAQ</h3>
              <p className="text-muted-foreground text-sm">
                Find quick answers to common questions
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-muted-foreground text-sm">
                Reach out via phone or email for urgent matters
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="tickets" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="tickets" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Support Tickets
              </TabsTrigger>
              <TabsTrigger value="faq" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                FAQ
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact Info
              </TabsTrigger>
            </TabsList>

            {/* Support Tickets Tab */}
            <TabsContent value="tickets" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Create New Ticket */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="h-5 w-5" />
                      Create New Ticket
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleTicketSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={ticketForm.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="Brief description of your issue"
                          value={ticketForm.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Category</Label>
                          <Select onValueChange={(value) => handleInputChange("category", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="technical">Technical Issue</SelectItem>
                              <SelectItem value="billing">Billing</SelectItem>
                              <SelectItem value="general">General Question</SelectItem>
                              <SelectItem value="feature">Feature Request</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Priority</Label>
                          <Select onValueChange={(value) => handleInputChange("priority", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="urgent">Urgent</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Please provide detailed information about your issue..."
                          rows={4}
                          value={ticketForm.description}
                          onChange={(e) => handleInputChange("description", e.target.value)}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        <Send className="h-4 w-4 mr-2" />
                        Submit Ticket
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* My Tickets */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      My Tickets
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockTickets.map((ticket) => (
                        <div
                          key={ticket.id}
                          className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold">{ticket.subject}</h4>
                              <p className="text-sm text-muted-foreground">
                                {ticket.id} • {ticket.created}
                              </p>
                            </div>
                            <div className="flex flex-col gap-1">
                              <Badge className={getStatusColor(ticket.status)}>
                                {ticket.status}
                              </Badge>
                              <Badge className={getPriorityColor(ticket.priority)}>
                                {ticket.priority}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              Category: {ticket.category}
                            </span>
                            <Button variant="ghost" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search FAQ..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqItems
                      .filter((item) =>
                        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((item, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <HelpCircle className="h-4 w-4 text-blue-600" />
                            {item.question}
                          </h4>
                          <p className="text-muted-foreground">{item.answer}</p>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contact Info Tab */}
            <TabsContent value="contact" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Email Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">General Support</h4>
                      <p className="text-muted-foreground">support@sportpredict.com</p>
                      <p className="text-sm text-muted-foreground">Response time: 24-48 hours</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Technical Issues</h4>
                      <p className="text-muted-foreground">tech@sportpredict.com</p>
                      <p className="text-sm text-muted-foreground">Response time: 12-24 hours</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Billing & Subscriptions</h4>
                      <p className="text-muted-foreground">billing@sportpredict.com</p>
                      <p className="text-sm text-muted-foreground">Response time: 24 hours</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Phone Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Premium Support Line</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">
                        Available for Pro and Elite subscribers
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Business Hours</h4>
                      <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM EST</p>
                      <p className="text-muted-foreground">Saturday: 10 AM - 4 PM EST</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Emergency Support</h4>
                      <p className="text-muted-foreground">+1 (555) 999-0000</p>
                      <p className="text-sm text-muted-foreground">
                        24/7 for critical issues (Elite subscribers only)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default SupportPage;