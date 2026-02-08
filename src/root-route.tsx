import { Navigate, Route, Routes } from "react-router";
import SignInPage from "@/pages/sign-in-page";
import SignUpPage from "@/pages/sign-up-page";
import ForgotPasswordPage from "@/pages/forgot-password-page";
import IndexPage from "@/pages/index-page";
import PostDetailPage from "@/pages/post-detail-page";
import ProfileDetailPage from "@/pages/profile-detail-page";
import ResetPasswordPage from "@/pages/reset-password-page";
import GlobalLayout from "@/components/layout/global-layout";
import GuestsOnlyLayout from "@/components/layout/guests-only-layout";
import MembersOnlyLayout from "@/components/layout/members-only-layout";

export default function RootRouter() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route element={<GuestsOnlyLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        <Route element={<MembersOnlyLayout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/post/:postId" element={<PostDetailPage />} />
          <Route path="/profile/:userId" element={<ProfileDetailPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Route>

        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
}
