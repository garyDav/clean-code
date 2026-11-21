(() => {
  // Gist: https://gist.github.com/Klerith/d9278895ff5dcacf6f1001d447fb443a

  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieCastById(movieId: string) {
    console.log({ movieId });
  }

  function getActorBioById(id: string) {
    console.log({ id });
  }

  interface Movie {
    cast: string[]
    description: string
    rating: number
    title: string
  }
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function checkFullName(fullName: string) {
    console.log({ fullName })

    return true
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    if (checkFullName(fullName)) return false;

    console.log('Crear actor', birthdate);
    return true;

  }

  // Continuar
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if (isDead) return 1500

    if (isSeparated) return 2500

    return isRetired ? 3000 : 4000
  }

  /**
  Otra solución
  */
  type EmployeeStatus = "isDead" | "isSeparated" | "isRetired";

  type PaymentAmounts = {
    [key in EmployeeStatus | "defaultAmount"]: number;
  };

  // interface PaymentAmountsWithDefault extends PaymentAmounts {
  // defaultAmount: number;
  // }

  const paymentAmounts: PaymentAmounts = {
    isDead: 1500,
    isSeparated: 2500,
    isRetired: 3000,
    defaultAmount: 4000,
  };

  const getPayAmountCustom = (state?: EmployeeStatus): number =>
    paymentAmounts[state || "defaultAmount"];

})();

