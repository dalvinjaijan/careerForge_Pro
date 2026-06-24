const PaymentSuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600">
          Payment Successful 🎉
        </h1>

        <p className="mt-4">
          Your account has been upgraded to Pro.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;