
import React, { useState } from 'react';
import { Share2, Gift, Copy, Users, Coins, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ReferralProgram = () => {
  const { toast } = useToast();
  const [referralCode] = useState('JOHN2024');
  const [referralLink] = useState('https://alcoview.app/join?ref=JOHN2024');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
  };

  const shareReferral = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join AlcohNex and get Ksh 500 off!',
        text: 'Use my referral code to get Ksh 500 off your first order on AlcohNex',
        url: referralLink,
      });
    } else {
      copyToClipboard(referralLink, 'Referral link');
    }
  };

  const referralStats = {
    totalReferrals: 12,
    successfulReferrals: 8,
    pendingRewards: 1500,
    totalEarned: 4000
  };

  const recentReferrals = [
    { name: 'Alice Johnson', status: 'completed', reward: 500, date: '2 days ago' },
    { name: 'Michael Brown', status: 'pending', reward: 500, date: '1 week ago' },
    { name: 'Sarah Davis', status: 'completed', reward: 500, date: '2 weeks ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-lg shadow-sm px-4 py-6 border-b border-gray-200/50">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
            Referral Program
          </h1>
          <p className="text-gray-600">Invite friends and earn rewards together!</p>
        </div>
      </div>
      
      <div className="container mx-auto max-w-4xl px-4 py-6 space-y-6">
        {/* Referral Benefits */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Gift size={32} />
            <div>
              <h2 className="text-2xl font-bold">Earn Ksh 500 for each friend!</h2>
              <p className="opacity-90">Your friends get Ksh 500 off their first order too</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white/20 rounded-xl p-4 text-center">
              <h3 className="text-lg font-semibold">You Get</h3>
              <p className="text-2xl font-bold">Ksh 500</p>
              <p className="text-sm opacity-90">Credit to your wallet</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 text-center">
              <h3 className="text-lg font-semibold">Friend Gets</h3>
              <p className="text-2xl font-bold">Ksh 500</p>
              <p className="text-sm opacity-90">Off first order</p>
            </div>
          </div>
        </div>

        {/* Referral Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Total Invites', value: referralStats.totalReferrals, icon: Users, color: 'from-blue-500 to-blue-600' },
            { title: 'Successful', value: referralStats.successfulReferrals, icon: CheckCircle, color: 'from-green-500 to-green-600' },
            { title: 'Pending Rewards', value: `Ksh ${referralStats.pendingRewards}`, icon: Coins, color: 'from-yellow-500 to-yellow-600' },
            { title: 'Total Earned', value: `Ksh ${referralStats.totalEarned}`, icon: Gift, color: 'from-purple-500 to-purple-600' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/20">
                <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg mb-3`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            );
          })}
        </div>

        {/* Share Your Code */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Share2 size={24} className="text-orange-500" />
            Share Your Referral
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Referral Code</label>
              <div className="flex gap-2">
                <div className="flex-1 bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 font-mono text-lg font-semibold">
                  {referralCode}
                </div>
                <Button
                  onClick={() => copyToClipboard(referralCode, 'Referral code')}
                  variant="outline"
                  className="px-4"
                >
                  <Copy size={16} />
                </Button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Referral Link</label>
              <div className="flex gap-2">
                <div className="flex-1 bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-600 truncate">
                  {referralLink}
                </div>
                <Button
                  onClick={() => copyToClipboard(referralLink, 'Referral link')}
                  variant="outline"
                  className="px-4"
                >
                  <Copy size={16} />
                </Button>
              </div>
            </div>
            
            <Button
              onClick={shareReferral}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              <Share2 size={16} className="mr-2" />
              Share with Friends
            </Button>
          </div>
        </div>

        {/* Recent Referrals */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <h3 className="text-xl font-semibold mb-4">Recent Referrals</h3>
          
          {recentReferrals.length > 0 ? (
            <div className="space-y-3">
              {recentReferrals.map((referral, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {referral.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{referral.name}</p>
                      <p className="text-sm text-gray-500">{referral.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">Ksh {referral.reward}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      referral.status === 'completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {referral.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Users size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No referrals yet. Start inviting friends!</p>
            </div>
          )}
        </div>

        {/* How it Works */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <h3 className="text-xl font-semibold mb-4">How It Works</h3>
          
          <div className="space-y-4">
            {[
              { step: 1, title: 'Share your code', desc: 'Send your referral code or link to friends' },
              { step: 2, title: 'Friend signs up', desc: 'They create an account using your code' },
              { step: 3, title: 'Friend orders', desc: 'They get Ksh 500 off their first order' },
              { step: 4, title: 'You earn', desc: 'Ksh 500 is added to your wallet' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;
