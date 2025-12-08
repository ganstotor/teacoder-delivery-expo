
import { useTypedNavigation } from "hooks/useTypedNavigation";
import { useState } from "react";
import { Pressable, Text, View } from "react-native"
import {SubmitHandler, useForm} from 'react-hook-form'
import { IAuthFormData } from "@/types/auth.interface";
import Loader from "components/ui/Loader";
import Button from "components/ui/button/Button";
import AuthFields from "./AuthFields";

const Auth: React.FC = () => {
  const [isReg, setIsReg] = useState(false)

  const {handleSubmit, reset, control} = useForm<IAuthFormData>({
    mode: 'onChange'
  })

  const onSubmit:SubmitHandler<IAuthFormData> = data => {
    console.log(data);
    
  }

  const isLoading = false
  
  return (
    <View className="mx-2 items-center justify-center h-full">
      <View className="w-9/12">
        <Text className="text-center text-black text-3xl font-medium mb-8">
          {isReg ? 'Sign Up' : 'Login'}
        </Text>
        {isLoading ? (
          <Loader/>
        ) : 
          <>

            <AuthFields control={control} />

            <Button onPress={handleSubmit(onSubmit)}>{isReg ? 'Sign Up' : 'Login'}</Button>
            <Pressable onPress={() => setIsReg(!isReg)}>
              <Text className="text-black text-center text-base mt-6">
                {isReg 
                ? 'Already have an account? ' 
                : "Don't have an account "
                }
                <Text className="text-[#47aa52]">
                  {isReg ? 'Sign Up' : 'Login'}
                </Text>
              </Text>
            </Pressable>
          </>
        }

        
      </View>
    </View>
  )
}

export default Auth;