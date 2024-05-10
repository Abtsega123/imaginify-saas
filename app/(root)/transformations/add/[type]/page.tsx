import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';


import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';


const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {

  const {userId} = auth()
  const transformation = transformationTypes[type];
 

  if (!userId) {
    // Redirect to the sign-in page if userId is not available
    redirect('/sign-in');
    return null; // Return early to avoid further execution
  }

  try {
    // Assuming getUserById fetches user data from somewhere
    // const user = await getUserById(userId);
  } catch (error) {
    console.error("Error fetching user:", error);
    // Handle the error accordingly
  }

 
  

  return (
   <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
      
    <TransformationForm
    action= "Add"
    userId={userId._id}
    type={transformation.type as TransformationTypeKey}
    creditBalance={userId.creditBalance}
   
  
  />
      </>
      
      
      
    
  )
}

export default AddTransformationTypePage