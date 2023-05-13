export default function useAuth() {
    const authWithGoogle = () =>
        window.open("http://localhost:9000/auth/google", "_self");
    return authWithGoogle;
}