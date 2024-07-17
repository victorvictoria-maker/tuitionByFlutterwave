const ProgressIndicator = ({ step }): React.ReactNode => {
  return (
    <div className='flex mt-32'>
      {["Select Account Type", "Fill Form", "Complete"].map((label, index) => (
        <div key={index} className='flex items-center'>
          {index > 0 && <div className='w-2 h-1 bg-transparent ml-1'></div>}
          <div
            className={`w-24 h-1 rounded-lg ${
              step === index + 1 ? "bg-blueGradient" : "bg-grayColor50"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
