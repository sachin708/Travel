// import "./Home.css";

// const Home = () => {
//   return (
//     <>
//       <div className="homemaindiv">
//         <div style={{ marginTop: "14%" }}>
//           <h1 style={{ color: "white", fontSize: "48px", textAlign: "center" }}>
//             Crafting memorable vacations for 20 years
//           </h1>
//           <h3 style={{ color: "white", fontSize: "18px", textAlign: "center" }}>
//             Let Our Experts Plan Your Private, Tailor-Made and Secure Tour in
//             70+ Inspiring Destinations.
//           </h3>
//           <button className="createmy">CREATE MY TRIP NOW</button>
//         </div>
//       </div>
//       <h4
//         style={{
//           textAlign: "center",
//           fontSize: "20px",
//           padding: "40px",
//           marginTop: "60px",
//         }}
//       >
//         Experience a completely customized and flexible trip of a lifetime with
//         experts you can trust. We are an award-winning team that <br></br>{" "}
//         offers round-the-clock local support during your trip and 100% financial
//         protection so you know you are in safe hands. That’s why over <br></br>
//         60,000+ enchanted guests vouch for us – because with us, you can dream,
//         book and travel carefree.
//       </h4>
//       <hr></hr>
//     </>
//   );
// };

// export default Home;

import "./Home.css";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  Select,
  Stack,
  Box,
} from "@chakra-ui/react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="homemaindiv">
        <div style={{ marginTop: "14%" }}>
          <h1 style={{ color: "white", fontSize: "48px", textAlign: "center" }}>
            Crafting memorable vacations for 20 years
          </h1>
          <h3 style={{ color: "white", fontSize: "18px", textAlign: "center" }}>
            Let Our Experts Plan Your Private, Tailor-Made and Secure Tour in
            70+ Inspiring Destinations.
          </h3>
          <button className="createmy" onClick={handleOpen}>
            CREATE MY TRIP NOW
          </button>
        </div>
      </div>
      <h4
        style={{
          textAlign: "center",
          fontSize: "20px",
          padding: "40px",
          marginTop: "60px",
        }}
      >
        Experience a completely customized and flexible trip of a lifetime with
        experts you can trust. We are an award-winning team that <br></br>{" "}
        offers round-the-clock local support during your trip and 100% financial
        protection so you know you are in safe hands. That’s why over <br></br>
        60,000+ enchanted guests vouch for us – because with us, you can dream,
        book and travel carefree.
      </h4>
      <hr />
      <Form isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

// function Form({ isOpen, onClose }) {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     destination: "",
//     interest: "",
//     travelers: "",
//     budget: "",
//     fullName: "",
//     email: "",
//     phone: "",
//     duration: "",
//     when: "",
//     stage: "",
//   });

//   const handleNextStep = () => setStep(step + 1);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = () => {
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//     onClose(); // Close the modal after submission
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent
//         maxW="lg"
//         // border="1px solid red"
//         borderRadius="8px"
//         w="25%"
//         m="auto"
//         mt="2%"
//         p="16px"
//         backgroundColor="rgb(229,230,236)"
//       >
//         <ModalCloseButton w="7%" bg="none" color="black" ml="92%" />

//         <ModalHeader>
//           {step === 1 ? (
//             <h4>We need a bit more info to create your itinerary:</h4>
//           ) : (
//             <h4>Please provide your contact details:</h4>
//           )}
//         </ModalHeader>
//         <ModalBody>
//           {step === 1 ? (
//             <Box>
//               <Stack spacing={4}>
//                 <FormControl>
//                   <Select
//                     placeholder="Where do you want to go?"
//                     name="destination"
//                     value={formData.destination}
//                     onChange={handleInputChange}
//                     style={{
//                       padding: "10px",
//                       marginBottom: "7px",
//                       width: "95%",
//                     }}
//                   >
//                     <option value="India">India</option>
//                     <option value="USA">USA</option>
//                     <option value="Australia">Australia</option>
//                   </Select>
//                 </FormControl>
//                 <FormControl>
//                   <Select
//                     placeholder="Your interest?"
//                     name="interest"
//                     value={formData.interest}
//                     onChange={handleInputChange}
//                     style={{
//                       padding: "10px",
//                       marginBottom: "7px",
//                       width: "95%",
//                     }}
//                   >
//                     <option value="Beach">Beach</option>
//                     <option value="Adventure & Arts">Adventure & Arts</option>
//                     <option value="Nature & Landscape">
//                       Nature & Landscape
//                     </option>
//                   </Select>
//                 </FormControl>
//                 <FormControl>
//                   <Select
//                     placeholder="No of travelers"
//                     name="travelers"
//                     value={formData.travelers}
//                     onChange={handleInputChange}
//                     style={{
//                       padding: "10px",
//                       marginBottom: "7px",
//                       width: "95%",
//                     }}
//                   >
//                     <option value="1 traveler">1 traveler</option>
//                     <option value="2 traveler">2 traveler</option>
//                     <option value="3 traveler">3 traveler</option>
//                     <option value="4 traveler">4 traveler</option>
//                   </Select>
//                 </FormControl>

//                 <FormControl>
//                   <Select
//                     placeholder="Budget Per Persion"
//                     name="budget"
//                     value={formData.budget}
//                     onChange={handleInputChange}
//                     style={{
//                       padding: "10px",
//                       marginBottom: "7px",
//                       width: "95%",
//                     }}
//                   >
//                     <option value="$4000-$5000">$4000-$5000</option>
//                     <option value="$5000-$6000">$5000-$6000</option>
//                     <option value="$6000-$7000">$6000-$7000</option>
//                     <option value="$7000-$8000">$7000-$8000</option>
//                   </Select>
//                 </FormControl>
//               </Stack>
//             </Box>
//           ) : (
//             <Stack spacing={4}>
//               <FormControl>
//                 <Input
//                   placeholder="Enter your full name"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   style={{
//                     padding: "10px",
//                     marginBottom: "7px",
//                     width: "89%",
//                   }}
//                 />
//               </FormControl>
//               <FormControl>
//                 <Input
//                   type="email"
//                   placeholder="Enter your email address"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   style={{
//                     padding: "10px",
//                     marginBottom: "7px",
//                     width: "89%",
//                   }}
//                 />
//               </FormControl>
//               <FormControl>
//                 <Input
//                   type="number"
//                   placeholder="Phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   style={{
//                     padding: "10px",
//                     marginBottom: "7px",
//                     width: "89%",
//                   }}
//                 />
//               </FormControl>
//               <FormControl>
//                 <Input
//                   type="number"
//                   placeholder="Duration(days)"
//                   name="duration"
//                   value={formData.duration}
//                   onChange={handleInputChange}
//                   style={{
//                     padding: "10px",
//                     marginBottom: "7px",
//                     width: "89%",
//                   }}
//                 />
//               </FormControl>

//               <FormControl>
//                 <Select
//                   placeholder="When?"
//                   name="when"
//                   value={formData.when}
//                   onChange={handleInputChange}
//                   style={{
//                     padding: "10px",
//                     marginBottom: "7px",
//                     width: "95%",
//                   }}
//                 >
//                   <option value="When">When</option>
//                   <option value="May 2024">May 2024</option>
//                   <option value="June 2024">June 2024</option>
//                   <option value="July 2024">July 2024</option>
//                 </Select>
//               </FormControl>

//               <FormControl>
//                 <Select
//                   placeholder="When stage of planning are you in"
//                   name="stage"
//                   value={formData.stage}
//                   onChange={handleInputChange}
//                   style={{
//                     padding: "10px",
//                     marginBottom: "7px",
//                     width: "95%",
//                   }}
//                 >
//                   <option value="when stage of planning are you in ?">
//                     when stage of planning are you in ?
//                   </option>
//                   <option value="Still dreaming/researching">
//                     Still dreaming/researching
//                   </option>
//                   <option value="Definitely traveling, need destination">
//                     Definitely traveling, need destination
//                   </option>
//                   <option value="I want to book a trip">
//                     I want to book a trip
//                   </option>
//                 </Select>
//               </FormControl>
//             </Stack>
//           )}
//         </ModalBody>
//         <br></br>
//         <ModalFooter>
//           {step === 1 ? (
//             <Button
//               colorScheme="blue"
//               onClick={handleNextStep}
//               backgroundColor="blue"
//               border="none"
//               borderRadius="7px"
//               p="11px"
//               mr="40%"
//               color="white"
//             >
//               GET STARTED
//             </Button>
//           ) : (
//             <>
//               <Button
//                 colorScheme="blue"
//                 onClick={handleSubmit}
//                 backgroundColor="blue"
//                 border="none"
//                 borderRadius="7px"
//                 p="11px"
//                 mr="40%"
//                 color="white"
//               >
//                 Submit
//               </Button>
//             </>
//           )}
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// }
function Form({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initial form data
    destination: "",
    interest: "",
    travelers: "",
    budget: "",
    fullName: "",
    email: "",
    phone: "",
    duration: "",
    when: "",
    stage: "",
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // if (
    //   formData.destination &&
    //   formData.interest &&
    //   formData.travelers &&
    //   formData.budget &&
    //   formData.fullName &&
    //   formData.email &&
    //   formData.phone &&
    //   formData.duration &&
    //   formData.when &&
    //   formData.stage
    // ) {
    //   return <h2>Form submitted</h2>;
    // } else {
    //   return <h2>Missing one filled</h2>;
    // }
    onClose(); // Close the modal after submission
  };

  // Function to handle moving to the next step
  const handleNextStep = () => {
    // Check if it's the last step, then submit the form
    if (step === 2) {
      handleSubmit();
    } else {
      // Move to the next step
      setStep(step + 1);
    }
  };

  // Function to handle moving to the previous step
  const handlePrevStep = () => {
    // Move to the previous step if not on the first step
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        maxW="lg"
        borderRadius="8px"
        w="25%"
        m="auto"
        mt="2%"
        p="16px"
        backgroundColor="rgb(229,230,236)"
      >
        <ModalCloseButton w="7%" bg="none" color="black" ml="92%" />

        <ModalHeader>
          {/* Render step-specific header */}
          {step === 1 ? (
            <h4>We need a bit more info to create your itinerary:</h4>
          ) : (
            <h4>Please provide your contact details:</h4>
          )}
        </ModalHeader>
        <ModalBody>
          {/* Render form fields based on the current step */}
          <Stack spacing={4}>
            {step === 1 && (
              <>
                <FormControl>
                  <Select
                    placeholder="Where do you want to go?"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    style={{
                      padding: "10px",
                      marginBottom: "7px",
                      width: "95%",
                    }}
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Australia">Australia</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <Select
                    placeholder="Your interest?"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    style={{
                      padding: "10px",
                      marginBottom: "7px",
                      width: "95%",
                    }}
                  >
                    <option value="Beach">Beach</option>
                    <option value="Adventure & Arts">Adventure & Arts</option>
                    <option value="Nature & Landscape">
                      Nature & Landscape
                    </option>
                  </Select>
                </FormControl>
                <FormControl>
                  <Select
                    placeholder="No of travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    style={{
                      padding: "10px",
                      marginBottom: "7px",
                      width: "95%",
                    }}
                  >
                    <option value="1 traveler">1 traveler</option>
                    <option value="2 traveler">2 traveler</option>
                    <option value="3 traveler">3 traveler</option>
                    <option value="4 traveler">4 traveler</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <Select
                    placeholder="Budget Per Person"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    style={{
                      padding: "10px",
                      marginBottom: "7px",
                      width: "95%",
                    }}
                  >
                    <option value="$4000-$5000">$4000-$5000</option>
                    <option value="$5000-$6000">$5000-$6000</option>
                    <option value="$6000-$7000">$6000-$7000</option>
                    <option value="$7000-$8000">$7000-$8000</option>
                  </Select>
                </FormControl>
              </>
            )}
            {step === 2 && (
              <>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    style={{
                      padding: "10px",
                      marginBottom: "7px",
                      width: "89%",
                    }}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      padding: "10px",
                      marginBottom: "7px",
                      width: "89%",
                    }}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      padding: "10px",
                      marginBottom: "7px",
                      width: "89%",
                    }}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Duration (days)"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    style={{
                      padding: "10px",
                      marginBottom: "7px",
                      width: "89%",
                    }}
                  />
                </FormControl>
                <FormControl>
                  <Select
                    placeholder="When?"
                    name="when"
                    value={formData.when}
                    onChange={handleInputChange}
                    style={{
                      padding: "10px",
                      marginBottom: "7px",
                      width: "95%",
                    }}
                  >
                    <option value="May 2024">May 2024</option>
                    <option value="June 2024">June 2024</option>
                    <option value="July 2024">July 2024</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <Select
                    placeholder="When stage of planning are you in?"
                    name="stage"
                    value={formData.stage}
                    onChange={handleInputChange}
                    style={{
                      padding: "10px",
                      marginBottom: "7px",
                      width: "95%",
                    }}
                  >
                    <option value="Still dreaming/researching">
                      Still dreaming/researching
                    </option>
                    <option value="Definitely traveling, need destination">
                      Definitely traveling, need destination
                    </option>
                    <option value="I want to book a trip">
                      I want to book a trip
                    </option>
                  </Select>
                </FormControl>
              </>
            )}
          </Stack>
        </ModalBody>
        <ModalFooter>
          {/* Conditional rendering of buttons based on step */}
          {step > 1 && (
            <Button
              colorScheme="blue"
              onClick={handlePrevStep}
              backgroundColor="blue"
              border="none"
              borderRadius="7px"
              p="11px"
              color="white"
            >
              Back
            </Button>
          )}
          <Button
            colorScheme="blue"
            onClick={handleNextStep}
            backgroundColor="blue"
            border="none"
            borderRadius="7px"
            p="11px"
            ml="auto"
            color="white"
          >
            {step === 2 ? "Submit" : "Next"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Home;
