import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./index";
import { Navigate } from "react-router-dom";

export const loginUser = createAsyncThunk("user/login",async({username,password,navigate})=>{
    try{
        const response = await api.post("/user/",{
            username,
            password
        });
        const data = await response.data;
        console.log(data);
        if(data.access_token){
            navigate("/");
        }
        return data;
    }catch(error){
        return error;
    }
});

