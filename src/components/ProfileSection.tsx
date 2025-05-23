
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard, 
  History, 
  Package, 
  Gift, 
  HelpCircle, 
  Bell, 
  User,
  LogOut,
  Trash2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProfileSection = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("account");
  
  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: "Your profile has been updated successfully.",
    });
  };

  const handleLogout = () => {
    // Will be implemented with authentication integration
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  const handleDeleteAccount = () => {
    // Will be implemented with backend integration
    toast({
      variant: "destructive",
      title: "Account deletion initiated",
      description: "We've sent a confirmation email to complete the process.",
    });
  };
  
  return (
    <div className="container mx-auto p-4 md:p-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>
      
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-6 w-full">
          <TabsTrigger value="account" className="flex flex-col items-center py-3 px-1 sm:flex-row sm:space-x-2">
            <User className="h-4 w-4" />
            <span className="text-xs sm:text-sm">Account</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="flex flex-col items-center py-3 px-1 sm:flex-row sm:space-x-2">
            <History className="h-4 w-4" />
            <span className="text-xs sm:text-sm">History</span>
          </TabsTrigger>
          <TabsTrigger value="subscription" className="flex flex-col items-center py-3 px-1 sm:flex-row sm:space-x-2">
            <Package className="h-4 w-4" />
            <span className="text-xs sm:text-sm">Subscription</span>
          </TabsTrigger>
          <TabsTrigger value="loyalty" className="flex flex-col items-center py-3 px-1 sm:flex-row sm:space-x-2">
            <Gift className="h-4 w-4" />
            <span className="text-xs sm:text-sm">Rewards</span>
          </TabsTrigger>
          <TabsTrigger value="help" className="flex flex-col items-center py-3 px-1 sm:flex-row sm:space-x-2">
            <HelpCircle className="h-4 w-4" />
            <span className="text-xs sm:text-sm">Help</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex flex-col items-center py-3 px-1 sm:flex-row sm:space-x-2">
            <Bell className="h-4 w-4" />
            <span className="text-xs sm:text-sm">Notifications</span>
          </TabsTrigger>
        </TabsList>

        {/* Account Tab */}
        <TabsContent value="account" className="space-y-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" defaultValue="John Doe" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+254 712 345 678" className="mt-1" />
              </div>
              
              <Button onClick={handleSave} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Save Changes
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
            
            <div className="space-y-4">
              <div className="border rounded-md p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <CreditCard className="h-6 w-6 mr-3 text-gray-500" />
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-gray-500">Expires 12/25</p>
                  </div>
                </div>
                <Button variant="outline">Manage</Button>
              </div>
              
              <div className="border rounded-md p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-6 w-6 mr-3 text-green-600 font-bold text-center">M</div>
                  <div>
                    <p className="font-medium">M-Pesa</p>
                    <p className="text-sm text-gray-500">+254 712 345 678</p>
                  </div>
                </div>
                <Button variant="outline">Manage</Button>
              </div>
              
              <Button variant="outline" className="w-full">
                Add Payment Method
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Privacy & Security</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" placeholder="••••••••" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" placeholder="••••••••" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" placeholder="••••••••" className="mt-1" />
              </div>
              
              <Button onClick={handleSave} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Update Password
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-red-600 mb-4">Danger Zone</h2>
            
            <div className="space-y-4">
              <Button onClick={handleLogout} variant="outline" className="w-full border-red-200 text-red-600 hover:bg-red-50">
                <LogOut className="h-4 w-4 mr-2" />
                Log Out
              </Button>
              
              <Button 
                onClick={handleDeleteAccount} 
                variant="outline" 
                className="w-full border-red-200 text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete My Account and Data
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history" className="space-y-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Order History</h2>
            
            <div className="space-y-4">
              {[1, 2, 3].map((order) => (
                <div key={order} className="border rounded-md p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">Order #{10000 + order}</p>
                      <p className="text-sm text-gray-500">May {order + 10}, 2025</p>
                    </div>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Delivered</span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-gray-700">3 items</p>
                    <p className="font-medium">Ksh 2,{750 + order*100}</p>
                  </div>
                  <Button variant="link" className="text-orange-600 p-0 h-auto mt-2">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Payment History</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left border-b">
                  <tr>
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Payment Method</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((payment) => (
                    <tr key={payment} className="border-b">
                      <td className="py-3">May {payment + 10}, 2025</td>
                      <td className="py-3">{payment % 2 === 0 ? 'M-Pesa' : 'Visa •••• 4242'}</td>
                      <td className="py-3">Ksh {1000 + payment*100}</td>
                      <td className="py-3">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        {/* Subscription Tab */}
        <TabsContent value="subscription" className="space-y-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">Current Subscription</h2>
              <span className="px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-800">Premium</span>
            </div>

            <div className="space-y-2 mb-6">
              <p className="text-gray-700">Next billing date: June 15, 2025</p>
              <p className="text-gray-700">Monthly subscription: Ksh 4,999</p>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="outline">Change Plan</Button>
              <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                Cancel Subscription
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Subscription Wallet</h2>
            
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-lg text-white mb-6">
              <p className="text-lg opacity-90">Current Balance</p>
              <p className="text-3xl font-bold">Ksh 12,500</p>
              <p className="opacity-80 text-sm mt-2">Last loaded: May 10, 2025</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="topupAmount">Top up amount (Ksh)</Label>
                <Input id="topupAmount" type="number" placeholder="5000" className="mt-1" />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Top up Wallet
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Subscription Packages</h2>
            
            <div className="grid gap-4 md:grid-cols-3">
              <div className="border rounded-lg p-6 relative">
                <span className="absolute top-2 right-2 px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                  Base
                </span>
                <h3 className="text-xl font-bold mb-2">Base Package</h3>
                <p className="text-3xl font-bold mb-4">Ksh 1,999 <span className="text-sm font-normal">/month</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>3 bottles of local premium beer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Free delivery within city limits</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Select</Button>
              </div>
              
              <div className="border border-orange-300 rounded-lg p-6 relative shadow-md">
                <span className="absolute top-2 right-2 px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">
                  Value
                </span>
                <h3 className="text-xl font-bold mb-2">Value Package</h3>
                <p className="text-3xl font-bold mb-4">Ksh 2,999 <span className="text-sm font-normal">/month</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>6 bottles of premium beer (local or international)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>1 bottle of wine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Free delivery nationwide</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-orange-300 text-orange-600">Select</Button>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 relative text-white">
                <span className="absolute top-2 right-2 px-2 py-1 text-xs rounded-full bg-white text-orange-600">
                  Premium
                </span>
                <h3 className="text-xl font-bold mb-2">Premium Package</h3>
                <p className="text-3xl font-bold mb-4">Ksh 4,999 <span className="text-sm font-normal">/month</span></p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>12 bottles of premium beer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>2 bottles of fine wine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>1 bottle of premium spirits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Exclusive access to limited editions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Priority delivery nationwide</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-orange-600 hover:bg-gray-100">Current Plan</Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Loyalty Rewards Tab */}
        <TabsContent value="loyalty" className="space-y-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Your Loyalty Points</h2>
            
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-32 w-32 rounded-full flex items-center justify-center text-white">
                <div className="text-center">
                  <p className="text-3xl font-bold">2,450</p>
                  <p className="text-xs">POINTS</p>
                </div>
              </div>
              
              <div>
                <p className="text-gray-700 mb-2">Points expiry: December 31, 2025</p>
                <p className="text-sm text-gray-600 mb-4">Earn 1 point for every Ksh 100 spent. Redeem points for merchandise and discounts.</p>
                <Button variant="outline" className="text-orange-600 border-orange-200">
                  View Point History
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Available Rewards</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded-lg overflow-hidden">
                <img src="https://placehold.co/400x300?text=Jersey" alt="Football Jersey" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">AlcohNex Football Jersey</h3>
                  <p className="text-gray-600 text-sm mb-2">Limited edition branded football jersey</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-orange-600">1,500 points</span>
                    <Button size="sm" variant="outline">Redeem</Button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <img src="https://placehold.co/400x300?text=Glasses" alt="Whiskey Glasses" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Premium Whiskey Glasses</h3>
                  <p className="text-gray-600 text-sm mb-2">Set of 4 crystal whiskey glasses</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-orange-600">800 points</span>
                    <Button size="sm" variant="outline">Redeem</Button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <img src="https://placehold.co/400x300?text=Shirt" alt="African Shirt" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Branded African Shirt</h3>
                  <p className="text-gray-600 text-sm mb-2">Traditional African print shirt with logo</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-orange-600">1,200 points</span>
                    <Button size="sm" variant="outline">Redeem</Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="link" className="text-orange-600">
                View All Rewards
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Help Tab */}
        <TabsContent value="help" className="space-y-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">How do I change my subscription plan?</h3>
                <p className="text-gray-600">
                  You can change your subscription plan by going to the Subscription tab in your profile, 
                  then clicking on the "Change Plan" button. From there, you can select your new plan and confirm the change.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">What payment methods are accepted?</h3>
                <p className="text-gray-600">
                  We accept credit/debit cards (Visa, Mastercard) and mobile money payments (M-Pesa, Airtel Money).
                  You can manage your payment methods in the Account tab of your profile.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">How does the subscription wallet work?</h3>
                <p className="text-gray-600">
                  The subscription wallet allows you to pre-load funds that will be used for your subscription payments.
                  This eliminates the need for recurring card charges or M-Pesa transactions.
                  You can top up your wallet anytime in the Subscription tab.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Can I gift a subscription to someone else?</h3>
                <p className="text-gray-600">
                  Yes! You can purchase a gift subscription by selecting "Gift a Subscription" in the subscription section.
                  The recipient will receive an email with instructions on how to activate their gift.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">How do I earn loyalty points?</h3>
                <p className="text-gray-600">
                  You earn 1 loyalty point for every Ksh 100 spent on subscriptions or one-time purchases.
                  Points can be redeemed for exclusive merchandise and discounts in the Rewards section.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter subject" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full mt-1 rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Send Message
              </Button>
            </div>
            
            <div className="border-t mt-6 pt-6">
              <p className="text-gray-700 mb-2">You can also reach us at:</p>
              <p className="text-gray-600">Email: support@alcohnex.com</p>
              <p className="text-gray-600">Phone: +254 712 345 678</p>
            </div>
          </div>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Order Updates</p>
                  <p className="text-sm text-gray-500">Receive notifications about your order status</p>
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-orange-600" defaultChecked />
                    <span className="text-sm">Email</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-orange-600" defaultChecked />
                    <span className="text-sm">SMS</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-orange-600" defaultChecked />
                    <span className="text-sm">Push</span>
                  </label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Subscription Reminders</p>
                  <p className="text-sm text-gray-500">Notifications about upcoming subscription renewals</p>
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-orange-600" defaultChecked />
                    <span className="text-sm">Email</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-orange-600" defaultChecked />
                    <span className="text-sm">SMS</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-orange-600" defaultChecked />
                    <span className="text-sm">Push</span>
                  </label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Promotional Notifications</p>
                  <p className="text-sm text-gray-500">Special offers, discounts and new products</p>
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-orange-600" defaultChecked />
                    <span className="text-sm">Email</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-orange-600" />
                    <span className="text-sm">SMS</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-orange-600" />
                    <span className="text-sm">Push</span>
                  </label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Account-Related Notifications</p>
                  <p className="text-sm text-gray-500">Security alerts, password changes, etc.</p>
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-orange-600" defaultChecked />
                    <span className="text-sm">Email</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-orange-600" defaultChecked />
                    <span className="text-sm">SMS</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-orange-600" />
                    <span className="text-sm">Push</span>
                  </label>
                </div>
              </div>
            </div>
            
            <Button className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              Save Preferences
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileSection;
