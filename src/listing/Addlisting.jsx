import Header from "@/components/Header";
import React, { useState,useRef } from "react";
import carDetails from "./../shared/carDetails.json";
import InputField from "./components/InputField";
import DropDown from "./components/DropDown";
import TextareaField from "./components/TextareaField";
import { Separator } from "@radix-ui/react-separator";
import features from "./../shared/features.json";
import CheckboxField from "./components/CheckboxField"; // adjust if path differs
import { Button } from "@/components/ui/button";
import { CarListing } from "./../../configs/schema";
import { db } from "./../../configs";
import Iconfield from "./components/Iconfield";
import UploadImage from "./components/UploadImage";
import { useUser } from "@clerk/clerk-react";
import dayjs from "dayjs";
import { toast } from "react-hot-toast";
import { Car, Settings, Camera, CheckCircle, AlertCircle, Loader2, X } from "lucide-react";

const AddListing = () => {
  const [formData, setFormData] = useState({});
  const [featuresData, setFeaturesData] = useState({});
  const [triggerUploadImage, setTriggerUploadImage] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const hasUploadedImages = useRef(false);
  const { user } = useUser();

  const steps = [
    { id: 1, name: 'Car Details', icon: Car, description: 'Basic information about your car' },
    { id: 2, name: 'Features', icon: Settings, description: 'Select available features' },
    { id: 3, name: 'Photos', icon: Camera, description: 'Upload car images' }
  ];

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFeatureChange = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateStep = (step) => {
    if (step === 1) {
      const requiredFields = ['listingTitle', 'make', 'model', 'year', 'location', 'originalPrice', 'sellingPrice', 'category', 'condition'];
      return requiredFields.every(field => formData[field]);
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    } else {
      toast.error("Please fill in all required fields before proceeding");
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!user?.primaryEmailAddress?.emailAddress) {
      toast.error("Please sign in to create a listing");
      setIsSubmitting(false);
      return;
    }

    // Validate required fields
    const requiredFields = [
      'listingTitle', 
      'make', 
      'model', 
      'year',
      'location',
      'originalPrice',
      'sellingPrice',
      'category',
      'condition'
    ];

    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast.error(`Missing required fields: ${missingFields.join(', ')}`);
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare data with proper formatting
      const listingData = {
        ...formData,
        features: featuresData,
        createdBy: user.primaryEmailAddress.emailAddress,
        postedOn: dayjs().format("DD/MM/YYYY"),
        // Convert numeric fields
        year: Number(formData.year),
        originalPrice: Number(formData.originalPrice),
        sellingPrice: Number(formData.sellingPrice),
        mileage: formData.mileage ? Number(formData.mileage) : null,
        engineSize: formData.engineSize ? Number(formData.engineSize) : null,
        // Ensure string fields
        location: String(formData.location),
        // Set defaults for optional fields
        vin: formData.vin || null,
        door: formData.door || null,
        cylinder: formData.cylinder || null
      };
      const result = await db
      .insert(CarListing)
      .values(listingData)
      .returning({ id: CarListing.id });
    
    if (result && result[0]?.id) {
      setTriggerUploadImage(result[0].id); // ✅ This must run before step 3
      setShowSuccessModal(true);          // ✅ You are doing this already
    }
    
    } catch (error) {
      console.error("Insert failed:", error);
      
      let errorMessage = "Failed to create listing. Please try again.";
      if (error.message.includes("null value in column")) {
        const column = error.message.match(/column "([^"]+)"/)[1];
        errorMessage = `Please provide a value for: ${column.replace(/([A-Z])/g, ' $1').trim()}`;
      } else if (error.message.includes("violates not-null constraint")) {
        errorMessage = "Please fill in all required fields";
      }
      
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    // Reset form and refresh page
    setFormData({});
    setFeaturesData({});
    setCurrentStep(1);
    setTriggerUploadImage();
    // Refresh the page
    window.location.reload();
  };

  const continueToPhotos = () => {
    setShowSuccessModal(false);
    setCurrentStep(3);
  };

  return (
    <div className="min-h-screen bg-gra mt-20 ">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Car className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            List Your <span className="text-blue-600 relative">Car
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 rounded-full transform -rotate-1"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reach thousands of potential buyers with our premium listing platform
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex-1">
                  <div className="flex items-center">
                    <div className={`
                      flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300
                      ${isActive ? 'bg-blue-600 border-blue-600 text-white' : 
                        isCompleted ? 'bg-green-500 border-green-500 text-white' : 
                        'bg-white border-gray-300 text-gray-400'}
                    `}>
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <StepIcon className="w-6 h-6" />
                      )}
                    </div>
                    
                    {index < steps.length - 1 && (
                      <div className={`
                        flex-1 h-0.5 mx-4 transition-all duration-300
                        ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}
                      `} />
                    )}
                  </div>
                  
                  <div className="mt-3 text-center">
                    <p className={`font-medium ${isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'}`}>
                      {step.name}
                    </p>
                    <p className="text-sm text-gray-500 hidden sm:block">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Form */}
        <div className="max-w-6xl mx-auto">
          <form onSubmit={onSubmit} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            
            {/* Step 1: Car Details */}
            {currentStep === 1 && (
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Car className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Car Details</h2>
                    <p className="text-gray-600">Tell us about your vehicle</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {carDetails.carDetails.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <Iconfield icon={item.icon} />
                        {item.label}
                        {item.required && <span className="text-red-500">*</span>}
                      </label>
                      
                      <div className="relative">
                        {item.fieldType === "text" || item.fieldType === "number" ? (
                          <InputField
                            item={item}
                            handleInputChange={handleInputChange}
                            value={formData[item.name] || ''}
                          />
                        ) : item.fieldType === "dropdown" ? (
                          <DropDown
                            item={item}
                            handleInputChange={handleInputChange}
                            value={formData[item.name] || ''}
                          />
                        ) : item.fieldType === "textarea" ? (
                          <TextareaField
                            item={item}
                            handleInputChange={handleInputChange}
                            value={formData[item.name] || ''}
                          />
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end mt-12">
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Continue to Features
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Features */}
            {currentStep === 2 && (
  <div className="p-8 lg:p-12">
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
        <Settings className="w-5 h-5 text-green-600" />
      </div>
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Features & Options</h2>
        <p className="text-gray-600">Select all the features your car has</p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-2">
  {features.features.map((item, index) => (
    <div
      key={index}
      className={`flex items-center gap-1 rounded-sm border px-3 py-2 text-xs cursor-pointer ${
        featuresData[item.name] ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
      onClick={() =>
        handleFeatureChange(item.name, !featuresData[item.name])
      }
    >
      <CheckboxField
        checked={featuresData[item.name] || false}
        className="pointer-events-none"
      />
      {item.label}
    </div>
  ))}
</div>



    <div className="flex justify-between mt-12">
      <Button
        type="button"
        onClick={prevStep}
        variant="outline"
        className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200"
      >
        Back
      </Button>
      <Button
        type="button"
        onClick={nextStep}
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
      >
        Continue to Photos
      </Button>
    </div>
  </div>
)}

            {/* Step 3: Photos & Submit */}
            {currentStep === 3 && (
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Upload Photos</h2>
                    <p className="text-gray-600">Add high-quality images to attract more buyers</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                  <UploadImage triggerUploadImage={triggerUploadImage} />
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200"
                  >
                    Back
                  </Button>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Publishing...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Publish Listing
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Tips Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Pro Tips</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Better Photos = More Views</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Take photos in good lighting</li>
                  <li>• Include interior and exterior shots</li>
                  <li>• Show any damage honestly</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Competitive Pricing</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Research similar cars in your area</li>
                  <li>• Be realistic about your car's condition</li>
                  <li>• Consider recent maintenance costs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-center text-white relative">
                <button
                  onClick={handleSuccessModalClose}
                  className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Success!</h3>
                <p className="text-green-100 mt-2">Your car has been listed successfully</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-4">
                    Your listing is now live and potential buyers can start viewing it. 
                    Would you like to add photos to make it more attractive?
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 text-green-700">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Listing Details Saved</span>
                    </div>
                    <p className="text-sm text-green-600 mt-1">
                      Your car information has been successfully saved to our database.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={continueToPhotos}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Add Photos
                  </Button>
                  <Button
                    onClick={handleSuccessModalClose}
                    variant="outline"
                    className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                  >
                    Done
                  </Button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  You can always add photos later from your dashboard
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddListing;