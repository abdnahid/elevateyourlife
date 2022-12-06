import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import {
  MdOutlinePrivacyTip,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";

const TopBar = () => {
  const { data: session } = useSession();
  return (
    <section className="py-1">
      <div className="w-4/5 mx-auto grid grid-cols-2 items-center">
        <nav>
          <ul className="flex items-center justify-start space-x-3">
            <li className="top-head-nav-items hover:text-theme">
              <MdOutlinePrivacyTip /> <span>Privacy</span>
            </li>
            <li className="top-head-nav-items hover:text-theme">
              <MdOutlineIntegrationInstructions /> <span>Terms</span>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex items-center justify-end space-x-2">
            {!session ? (
              <li
                className="bg-theme text-white rounded-sm top-head-nav-items"
                onClick={() => signIn()}
              >
                <FiLogIn /> <span>Login</span>
              </li>
            ) : (
              <>
                <li className="bg-theme text-white rounded-sm top-head-nav-items">
                  <Link href="/user">
                    <FiLogIn /> <span>Profile</span>
                  </Link>
                </li>
                <li className="bg-theme text-white rounded-sm top-head-nav-items">
                  <Link href="/bookings">
                    <FiLogIn /> <span>Bookings</span>
                  </Link>
                </li>
                <li className="bg-theme text-white rounded-sm top-head-nav-items">
                  <button onClick={() => signOut()}>
                    <FiLogIn /> <span>Logout</span>
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default TopBar;
