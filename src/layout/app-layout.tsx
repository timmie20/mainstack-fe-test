import MiniSideBar from "@/components/shared/mini-side-bar";
import { Navbar } from "@/components/shared/nav-bar";
import { isApiError } from "@/lib/api";
import { getUsers } from "@/services";
import { useUserStore } from "@/store/user-store";
import type { ReactNode } from "react";
import { useEffect } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const { setUser, setLoading, setError } = useUserStore();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const userData = await getUsers();

        if (isApiError(userData)) {
          setError(userData.message);
        } else {
          setUser(userData);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch user data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [setUser, setLoading, setError]);

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-40 bg-background ">
        <div className="max-w-[1406px] mx-auto">
          <Navbar />
        </div>
      </div>

      <MiniSideBar />

      {/* Main Content with top padding to account for fixed navbar */}
      <div className="max-w-[1406px] mx-auto pt-32">{children}</div>
    </div>
  );
}
