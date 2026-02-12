import { useState } from "react";
import { questionList } from "../content/functions/Activity/mock-data.js";
import "./common-style.less";
import "./demo01.less";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleBeginTesting = () => {
    setCurrentStep(1);
  };

  const handleAnsweringQuestion = () => {
    setCurrentStep((a) => a + 1);
  };

  return (
    <div className="version version1">
      {questionList.map((item, index) => {
        return (
          <div
            className={`step-content step${index} ${currentStep !== index ? "fade-item" : "fade-enter-done"}`}
            key={index}
          >
            <img className="image-bg" src={item.imgSrc} />
            {index === 0 && (
              <div onClick={handleBeginTesting} className="begin-testing"></div>
            )}
            {!!item.question1 && (
              <img
                onClick={handleAnsweringQuestion}
                className="question question1"
                src={item.question1}
              />
            )}
            {!!item.question2 && (
              <img
                onClick={handleAnsweringQuestion}
                className="question question2"
                src={item.question2}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Index;
