export default function UserAuthenticationFeature() {
    const authenticationWithGoogle = () => {
        window.open("http://localhost:8000/auth/google", "_self");
    }

    return {
        authenticationWithGoogle
    }
}