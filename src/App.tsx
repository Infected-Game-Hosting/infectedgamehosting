import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TermsPage from "./pages/terms";
import PrivacyPage from "./pages/privacy";
import PalworldPage from "./pages/palworld";
import { ScrollToTopButton } from "./components/ScrollToTopButton.tsx";
import MinecraftPage from "./pages/minecraft.tsx";
import AboutPage from "./pages/about-us.tsx";
import MinecraftJavaPage from "./pages/minecraft/java.tsx";
import MinecraftBedrockPage from "./pages/minecraft/bedrock.tsx";
import GamesPage from "./pages/game.tsx";
import NotFoundPage from "./pages/not-found.tsx";
import VRisingPage from "./pages/v-rising.tsx";
import Blog from "./pages/blog/blog.tsx";
import BlogDetail from "./pages/blog/blog-detail.tsx";
import AffiliatePage from "./pages/affiliate.tsx";
import AffiliateOnboarding from "./pages/affiliate-apply.tsx";
import EnshroudedPage from "./pages/enshrouded.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/affiliate" element={<AffiliatePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/affiliate-apply" element={<AffiliateOnboarding />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/game/palworld-server-hosting"
          element={<PalworldPage />}
        />
        <Route
          path="/game/minecraft-server-hosting"
          element={<MinecraftPage />}
        />
        <Route
          path="/game/minecraft-java-server-hosting"
          element={<MinecraftJavaPage />}
        />
        <Route
          path="/game/minecraft-bedrock-server-hosting"
          element={<MinecraftBedrockPage />}
        />
        <Route path="/game/vrising-server-hosting" element={<VRisingPage />} />
        <Route
          path="/game/enshrouded-server-hosting"
          element={<EnshroudedPage />}
        />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;
