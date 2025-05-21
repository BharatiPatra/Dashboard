import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import ArticlesDashboard from "./components/Article/article-dashboard";
import KeywordResearch from "./components/Article/KeywordResearch/keyword-research.jsx";
import SocialCompetitorKeyword from "./components/Article/Social/social-competitor-keyword.jsx";
import KeywordFromExcel from "./components/Article/KeywordExcel/keyword-from-excel.jsx";
import ManualKeywordArticle from "./components/Article/ManualKeyword/ManualKeywordArticle.jsx";
import LonglistKeywordArticle from "./components/Article/LonglistKeyword/LonglistKeywordArticle.jsx";
import ArticleSettings from "./components/Article/ArticleSetting/article-setting.jsx";
import InternalLink from "./components/Link/internal-link.jsx";
import Backlink from "./components/Backlink/back-link.jsx";
import AutoBlog from "./components/Blog/auto-blog.jsx";
import Integration from "./components/Integration/Integration.jsx";
import Subscription from "./components/Subscription/subscription.jsx";
import AffiliateProgram from "./components/Program/affiliate-program.jsx";
import TeamCenter from "./components/Team/team.jsx";
import Update from "./components/Update/update.jsx";
import Chat from "./components/Chat/chat.jsx";
import Profile from "./components/Profile/profile.jsx";
import CreateArticlePage from "./components/Article/CreateArticle/CreateArticle.jsx";
import RequestedFeatures from "./components/Article/RequestedFeature/requested-features.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* App layout as parent */}
        <Route path="/" element={<App />}>
          <Route index element={<ArticlesDashboard />} />
          <Route path="create-article" element={<CreateArticlePage />} />
          <Route path="requested-features" element={<RequestedFeatures />} />
          <Route path="keyword-research" element={<KeywordResearch />} />{" "}
          <Route
            path="social-competitor-keyword"
            element={<SocialCompetitorKeyword />}
          />
          <Route path="keyword-from-excel" element=<KeywordFromExcel /> />
          <Route
            path="manual-keyword-article"
            element={<ManualKeywordArticle />}
          />
          <Route
            path="longlist-keyword-article"
            element={<LonglistKeywordArticle />}
          />
          <Route path="article-settings" element={<ArticleSettings />} />
          <Route path="auto-blog" element={<AutoBlog />} />
          <Route path="internal-links" element={<InternalLink />} />
          <Route path="free-backlinks" element={<Backlink />} />
          <Route path="integration" element={<Integration />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="affiliate-program" element={<AffiliateProgram />} />
          <Route path="team-center" element={<TeamCenter />} />
          <Route path="updates" element={<Update />} />
          <Route path="live-chat" element={<Chat />} />
          <Route path="profile" element={<Profile />} />
          {/* Add more child routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
