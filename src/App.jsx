import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

// Home Pages Import
import DigitalAgency from './pages/DigitalAgency';
import CreativeAgency from './pages/CreativeAgency';
import PersonalPortfolio from './pages/PersonalPortfolio';
import HomeStartup from './pages/HomeStartup';
import CorporateAgency from './pages/CorporateAgency';


// Blog Import
import BlogGridView from './pages/BlogGrid';
import BlogCategory from './pages/Category';
import BlogArchive from './pages/Archive';
import BlogDetails from './pages/BlogDetails';

// Service 
import ServiceOne from './pages/ServiceOne';
import ServiceTwo from './pages/ServiceTwo';
import ServiceDetails from './pages/ServiceDetails';
import MerchantLogin from './pages/merchantLogin';

// Project 
import ProjectGridOne from './pages/ProjectGridOne';
import ProjectGridTwo from './pages/ProjectGridTwo';
import ProjectGridThree from './pages/ProjectGridThree';
import ProjectGridFive from './pages/ProjectGridFive';
import ProjectGridFour from './pages/ProjectGridFour';
import ProjectDetails from './pages/ProjectDetails';

// Pages 
import Splash from './pages/Splash';
import AboutUs from './pages/AboutUs';
import OurOffice from './pages/OurOffice';
import OurClients from './pages/OurClients';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import CaseStudy from './pages/CaseStudy';
import CaseDetails from './pages/CaseStudyDetails';
import Testimonials from './pages/Testimonials';
import PricingTable from './pages/PricingTable';
import Typography from './pages/Typography';
import Contact from './pages/Contact';
import ErrorPage from './pages/404';
import ComingSoon from './pages/ComingSoon';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import PersonalLoans from './pages/PersonalLoans';
import OtpVerification from './pages/OtpVerification';
import DetailsForm from './pages/DetailsForm';
// Css Import
import './assets/scss/app.scss';
import BusinessLoans from './pages/BusinessLoans';
import TurnOver from './pages/TurnOver';
// const PUBLIC_URL = import.meta.env.VITE_API_URL;
import DetailsForm2 from './pages/DetailsForm2';
import UserDetails from './pages/UserDetails';
import UserDetails2 from './pages/UserDetails2';
import TurnOver2 from './pages/TurnOver2';
import FormBusinessLoan from "./component/contact/FormBusinessLoan"
import BusinessLoanOtpVerification from './pages/BusinessLoanOtpVerification';
import BusinessLoanForm from './pages/BusinessLoanForm';
import PrivateRoute from './pages/PrivateRoute';
import ProjectGridFiveBL from './pages/ProjectGridFiveBL';
import PrivateRouteBL from './pages/PrivateriuteBL';
const App = () => {
	useEffect(() => {
		const stored = localStorage.getItem("referral_code");
		if (stored === "verification" || stored === "user-details") {
			localStorage.removeItem("referral_code");
			// console.log("❌ Invalid referral code removed from localStorage");
		}
	}, []);
	return (
		<Router >
			<ScrollToTop>
				<Routes>
					{/* <Route path={PUBLIC_URL + "/"} element={<Splash />}/> */}
					<Route path="/" element={<CreativeAgency />} />


					<Route path="/project-width-one" element={<ProjectGridFour />} />

					{/* Pages  */}
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/our-clients" element={<OurClients />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/merchant-login" element={<MerchantLogin />} />
					{/* <Route path="/personal-loan/verification/user-details" element={<UserDetails />} /> */}
					{/* <Route path="/business-loans/user-details2" element={<UserDetails2 />} /> */}

					<Route path="/personal-loan/:referralCode?" element={<PersonalLoans />} />
					{/* <Route path="/personal-loan" element={<PersonalLoanFlow />} /> */}
					<Route path="/verification/:referralCode?" element={<OtpVerification />} />
					{/* <Route path="/personal-loan/verification/user-details/:referralCode?" element={<UserDetails />} /> */}
					<Route
						path="/user-detail/:referralCode?"
						element={
							<PrivateRoute>
								<UserDetails />
							</PrivateRoute>
						}
					/>
					<Route path="/user-detail/offers/:referralCode?" element={<ProjectGridFour />} />

					
					<Route path="/business-loan/:referralCode?" element={<BusinessLoans />} />
					<Route path="/bl-verification/:referralCode?" element={<BusinessLoanOtpVerification />} />
					{/* <Route path="/business-detail/:referralCode?" element={<BusinessLoanForm />} /> */}

					{/* <Route path="/business-loan/verification/business-details/user-details3/turn-over2/offers" element={<ProjectGridOne />} /> */}
					{/* /business-loans/verification/user-details2/user-details3/turn-over2/offers */}
					{/* <Route path="/business-loan/verification/business-details/turn-over2" element={<TurnOver2 />} /> */}
					{/* <Route path="/business-loan/verification/business-details/turn-over2/offers" element={<ProjectGridOne />} /> */}
					<Route
						path="/business-detail/:referralCode?"
						element={
							<PrivateRouteBL>
								<BusinessLoanForm />
							</PrivateRouteBL>
						}
					/>



					{/* <Route path="/personal-loan/verification/user-details/offers" element={<ProjectGridOne />} /> */}
					<Route path="/business-detail/offers/:referralCode?" element={<ProjectGridFiveBL />} />


					{/* <Route path={PUBLIC_URL + "/merchant-signup"} element={<MerchantLogin />}/> */}

					<Route path="/404" element={<ErrorPage />} />
					<Route path="/coming-soon" element={<ComingSoon />} />
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
					<Route path="/terms-use" element={<TermsOfUse />} />
				</Routes>
			</ScrollToTop>
		</Router>
	)
}

export default App;

// set NODE_OPTIONS=--openssl-legacy-provider
// {/* AIzaSyCoBxATVbRV2-CHYx6VrVk2nAFp5a6iaiQ */}
