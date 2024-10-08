import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Weather from "../components/Weather";
import Birthday from "../components/Birthday";
import Retirement from "../components/Retirement";
import CalendarTab from "../components/Calendar";
import DocumentLibrary from "../components/DocumentLibrary";
import EmployeeDirectory from "../components/EmployeeDirectory";
import SafetyStatistics from "../components/SafetyStatistics";
import CompanyAnnouncement from "../components/CompanyAnnouncement";
import Links from "../components/Links";
import NewsCenter from "../components/NewsCenter";
import QuickAction from "../components/QuickAction";
import SuggestionBox from "../components/SuggestionBox";
import CafeteriaMenu from "../components/CafeteriaMenu";
import UpcomingEvent from "../components/UpcomingEvent";
import Download from "../components/Download";
import KeyPerformance from "../components/KeyPerformance";
import Footer from "../components/Footer";

export default function IntranetDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
          <div className="md:col-span-2">
            <Links />
            <QuickAction />
            <NewsCenter />
            <SafetyStatistics />
            <EmployeeDirectory />
            <CompanyAnnouncement />
            <DocumentLibrary />
          </div>
          <div className="mt-8">
            <Weather />
            <CalendarTab />
            <Birthday />
            <Retirement />
            <UpcomingEvent />
            <CafeteriaMenu />
            <SuggestionBox />
            <Download />
          </div>
        </div>
        <KeyPerformance />
      </main>
      <Footer />
    </div>
  );
}
