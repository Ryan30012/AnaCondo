"use client"
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
//const Form = (assignmentID:number) => {
export default function Form({assignmentID}:{assignmentID:number}) {
    //const aid = async() => {console.log("aid "+assignmentID);}
    const router = useRouter();
    const requestCompletion = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Inside requestCompletion function to call api");
        const formData = new FormData(e.target as HTMLFormElement);
        const requestID = formData.get("requestid");
        console.log("First request ID:" + requestID);
        const response = await fetch(`/api/completeRequest`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                requestid: formData.get("requestid"),
            }),
        });
        if (response.ok){
            router.push("/Employee/Dashboard");
            router.refresh();
        };
      }
    return (
        <form onSubmit={requestCompletion}>
            <input type = "hidden" id = "requestid" name="requestid" value = {assignmentID}></input>
            <button
            type="submit"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
            Done
            </button>
        </form>
    );

}
//export default Form;