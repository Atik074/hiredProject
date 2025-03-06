  // Function to access the file from localStorage
  export const getFileFromLocalStorage = () => {
    const base64 = localStorage.getItem("resumeFile");
    if (base64) {
      const link = document.createElement("a");
      link.href = base64;
      link.download = "resume.pdf";
      link.click();
    } else {
      console.log("No file found in localStorage.");
    }
  };

 