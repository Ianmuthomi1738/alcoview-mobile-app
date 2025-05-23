
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil } from 'lucide-react';

const ProfileSection = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    paymentMethod: 'card',
    cardDetails: '**** **** **** 1234',
    mobileMoneyNumber: ''
  });

  const [editMode, setEditMode] = useState({
    email: false,
    payment: false
  });

  const [tempData, setTempData] = useState({
    email: userInfo.email,
    paymentMethod: userInfo.paymentMethod,
    cardDetails: userInfo.cardDetails,
    mobileMoneyNumber: userInfo.mobileMoneyNumber
  });

  const handleEdit = (field: 'email' | 'payment') => {
    setEditMode(prev => ({ ...prev, [field]: true }));
    if (field === 'email') {
      setTempData(prev => ({ ...prev, email: userInfo.email }));
    }
  };

  const handleSave = (field: 'email' | 'payment') => {
    if (field === 'email') {
      setUserInfo(prev => ({ ...prev, email: tempData.email }));
    } else {
      setUserInfo(prev => ({ 
        ...prev, 
        paymentMethod: tempData.paymentMethod,
        cardDetails: tempData.cardDetails,
        mobileMoneyNumber: tempData.mobileMoneyNumber
      }));
    }
    setEditMode(prev => ({ ...prev, [field]: false }));
  };

  const handleCancel = (field: 'email' | 'payment') => {
    if (field === 'email') {
      setTempData(prev => ({ ...prev, email: userInfo.email }));
    } else {
      setTempData(prev => ({ 
        ...prev, 
        paymentMethod: userInfo.paymentMethod,
        cardDetails: userInfo.cardDetails,
        mobileMoneyNumber: userInfo.mobileMoneyNumber
      }));
    }
    setEditMode(prev => ({ ...prev, [field]: false }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Profile Header */}
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
          <CardContent className="p-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">{userInfo.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{userInfo.name}</h1>
                <p className="text-orange-100">Welcome to AlcohNex</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">7</div>
              <div className="text-sm text-gray-600">Days Active</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Goals Met</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
              <div className="text-sm text-gray-600">Progress</div>
            </CardContent>
          </Card>
        </div>

        {/* Email Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Email Address
              {!editMode.email && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEdit('email')}
                  className="text-gray-500 hover:text-orange-600"
                >
                  <Pencil size={16} />
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {editMode.email ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={tempData.email}
                    onChange={(e) => setTempData(prev => ({ ...prev, email: e.target.value }))}
                    className="h-10"
                  />
                </div>
                <div className="flex space-x-3">
                  <Button
                    onClick={() => handleSave('email')}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    Save
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleCancel('email')}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-gray-700">{userInfo.email}</p>
            )}
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Payment Methods
              {!editMode.payment && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEdit('payment')}
                  className="text-gray-500 hover:text-orange-600"
                >
                  <Pencil size={16} />
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {editMode.payment ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <Select
                    value={tempData.paymentMethod}
                    onValueChange={(value) => setTempData(prev => ({ ...prev, paymentMethod: value }))}
                  >
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="card">Credit/Debit Card</SelectItem>
                      <SelectItem value="mobile">Mobile Money</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {tempData.paymentMethod === 'card' && (
                  <div className="space-y-2">
                    <Label htmlFor="cardDetails">Card Details</Label>
                    <Input
                      id="cardDetails"
                      placeholder="**** **** **** 1234"
                      value={tempData.cardDetails}
                      onChange={(e) => setTempData(prev => ({ ...prev, cardDetails: e.target.value }))}
                      className="h-10"
                    />
                  </div>
                )}

                {tempData.paymentMethod === 'mobile' && (
                  <div className="space-y-2">
                    <Label htmlFor="mobileNumber">Mobile Money Number</Label>
                    <Input
                      id="mobileNumber"
                      placeholder="Enter mobile money number"
                      value={tempData.mobileMoneyNumber}
                      onChange={(e) => setTempData(prev => ({ ...prev, mobileMoneyNumber: e.target.value }))}
                      className="h-10"
                    />
                  </div>
                )}

                <div className="flex space-x-3">
                  <Button
                    onClick={() => handleSave('payment')}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    Save
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleCancel('payment')}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="font-medium text-gray-900">
                  {userInfo.paymentMethod === 'card' ? 'Credit/Debit Card' : 'Mobile Money'}
                </p>
                <p className="text-gray-600">
                  {userInfo.paymentMethod === 'card' 
                    ? userInfo.cardDetails 
                    : userInfo.mobileMoneyNumber || 'Not configured'
                  }
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* App Settings */}
        <Card>
          <CardHeader>
            <CardTitle>App Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Notifications</p>
                <p className="text-sm text-gray-600">Receive updates and reminders</p>
              </div>
              <div className="w-12 h-6 bg-orange-500 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Weekly Reports</p>
                <p className="text-sm text-gray-600">Get weekly progress summaries</p>
              </div>
              <div className="w-12 h-6 bg-gray-200 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSection;
