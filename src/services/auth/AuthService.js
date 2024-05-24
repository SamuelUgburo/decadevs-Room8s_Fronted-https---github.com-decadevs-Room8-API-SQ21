import { toast } from 'react-toastify';
import axiosClient from '../../utils/AxiosClient';

export async function signup(newUser){
    const loadingToast = toast.loading("Signing up...");
  
    try {
        const response = await axiosClient.post('/Account/register', newUser); 
        const apiResponse = response.data;
        if (apiResponse.isSuccessful) {
            toast.update(loadingToast, {
            render: "Signup successful, Please confirm your email!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true
            });
        } else {
            toast.update(loadingToast, {
            render: "Something went wrong, please try again.",
            type: "error",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true
            });
        }
        } catch (error) {
        toast.update(loadingToast, {
            render: "Something went wrong, please try again.",
            type: "error",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true
        });
        console.error('Error Signing up:', error);
    }
}