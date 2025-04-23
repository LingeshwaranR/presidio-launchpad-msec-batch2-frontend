import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth/auth.context";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants/route.constant";
import styles from "./index.module.css";
import loginBgImage from "../../assets/login.png";
import { ArrowRight } from "@mynaui/icons-react";
import { API_ENDPOINTS } from "../../constants/api.constants";
import { api } from "../../configs/axios.config";


const LoginScreen = () => {
  const { login, authState } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleEmailChange = (email: string) => {
    setEmail(email)
  }

  const handlePasswordChange = (password: string) => {
    setPassword(password)
  }

  console.log(authState.isAuthenticated)
  interface ILoginRequest {
    email: string;
    password: string;
  }

  interface ILoginResponse {
    responseMessage: string;
    exception: any;
    responseData: {
      token: string;
    }
  }

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate(APP_ROUTES.ROOT);
    }
  }, [authState.isAuthenticated]);
    

  const handleLogin = async () => {
    const newErrors: { email?: string; password?: string } = {};
  
    if (!email.trim()) {
      newErrors.email = "Email is required";
    }
  
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    // Clear previous errors
    setErrors({});

    const payload: ILoginRequest = {
      email: email,
      password: password
    }
    const response = await api.post<ILoginResponse, ILoginRequest>(API_ENDPOINTS.LOGIN, payload, {
      headers: {}
    })
    console.log(response.data.responseMessage)
    login(response.data.responseData.token);
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginFormWrapper}>
        <div className={styles.loginForm}>
          <form>
            <h1>Welcome Back</h1>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Enter Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => handleEmailChange(e.target.value)}
                value={email}
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Enter Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => handlePasswordChange(e.target.value)}
                value={password}
              />
              {errors.password && <span className={styles.errorText}>{errors.password}</span>}
            </div>

            <button type="button" onClick={handleLogin} className={styles.loginButton}>
              <div className={styles.loginButtonText}>
                <div>Log In</div>
                <ArrowRight size={24}/>
              </div>
              </button>
          </form>
        </div>
      </div>
    <div className={styles.loginImage}>
      <img src={loginBgImage} alt="login" />
    </div>
  </div>
)
};

export default LoginScreen;
