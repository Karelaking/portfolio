const exceptionHandler = (tryFunction, catchException) => {
  try {
    return tryFunction();
  } catch (error) {
    console.error(catchException);
    throw error;
  }
};

const asyncExceptionHandler = async (tryFunction, catchException) => {
  try {
    return await tryFunction();
  } catch (error) {
    console.error(catchException);
    throw error;
  }
};

export default { exceptionHandler, asyncExceptionHandler };
