import React, { useMemo, useState } from "react";
import "./Projects.css";

const HDB_TYPES = [
  { value: "1-room", label: "1-Room" },
  { value: "2-room", label: "2-Room Flexi" },
  { value: "3-room", label: "3-Room" },
  { value: "4-room", label: "4-Room" },
  { value: "5-room", label: "5-Room" },
  { value: "executive", label: "Executive" },
];

const LAWYER_FEE = 2500;

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(amount) ? amount : 0);

const parseAmount = (value) => {
  if (value === "") return 0;

  const parsedValue = Number(value);
  return Number.isFinite(parsedValue) ? parsedValue : 0;
};

const Projects = () => {
  const [hdbType, setHdbType] = useState("3-room");

  const [formValues, setFormValues] = useState({
    salePrice: "",
    owner1Cpf: "",
    owner2Cpf: "",
  });

  const [errors, setErrors] = useState({
    salePrice: "",
    owner1Cpf: "",
    owner2Cpf: "",
  });

  const resaleSubmissionFee =
    hdbType === "1-room" || hdbType === "2-room" ? 40 : 80;

  const calculations = useMemo(() => {
    const salePrice = parseAmount(formValues.salePrice);
    const owner1Cpf = parseAmount(formValues.owner1Cpf);
    const owner2Cpf = parseAmount(formValues.owner2Cpf);

    const grossGain = salePrice - owner1Cpf - owner2Cpf;
    const totalExpenses = resaleSubmissionFee + LAWYER_FEE;
    const netProfit = grossGain - totalExpenses;

    return {
      salePrice,
      owner1Cpf,
      owner2Cpf,
      grossGain,
      totalExpenses,
      netProfit,
    };
  }, [formValues, resaleSubmissionFee]);

  const handleAmountChange = (event) => {
    const { name, value } = event.target;

    // Allows an empty value, whole numbers and decimal values.
    const numberPattern = /^\d*\.?\d{0,2}$/;

    if (!numberPattern.test(value)) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "Please enter numbers only, with up to 2 decimal places.",
      }));
      return;
    }

    setFormValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    if (value !== "" && Number(value) < 0) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "The amount cannot be negative.",
      }));
    }
  };

  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <section id="projects" className="section projects-section">
      <div className="financial-page">
        <div className="financial-header">
  <p className="financial-kicker">HDB Financial Calculator</p>

  <h2>Estimated Sales Proceeds</h2>

  <p>
    Enter the HDB sale price and CPF amounts to estimate the proceeds
    remaining after the listed expenses.
  </p>
</div>

        <div className="financial-layout">
          <form
            className="financial-form"
            onSubmit={(event) => event.preventDefault()}
            noValidate
          >
            <div className="form-section-heading">
              <span>01</span>
              <div>
                <h3>Property details</h3>
                <p>Select the flat type and enter the expected sale price.</p>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="hdbType">HDB type</label>
              <select
                id="hdbType"
                name="hdbType"
                value={hdbType}
                onChange={(event) => setHdbType(event.target.value)}
              >
                {HDB_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="salePrice">Sale price of HDB</label>
              <div className="currency-input">
                <span>S$</span>
                <input
                  id="salePrice"
                  name="salePrice"
                  type="text"
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="Enter sale price"
                  value={formValues.salePrice}
                  onChange={handleAmountChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.salePrice)}
                  aria-describedby={
                    errors.salePrice ? "salePrice-error" : undefined
                  }
                />
              </div>
              {errors.salePrice && (
                <p id="salePrice-error" className="input-error">
                  {errors.salePrice}
                </p>
              )}
            </div>

            <div className="form-section-heading cpf-heading">
              <span>02</span>
              <div>
                <h3>CPF refund</h3>
                <p>Include CPF principal used and accrued interest.</p>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="owner1Cpf">Owner 1 CPF usage</label>
              <div className="currency-input">
                <span>S$</span>
                <input
                  id="owner1Cpf"
                  name="owner1Cpf"
                  type="text"
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="Usage + accrued interest"
                  value={formValues.owner1Cpf}
                  onChange={handleAmountChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.owner1Cpf)}
                  aria-describedby={
                    errors.owner1Cpf ? "owner1Cpf-error" : undefined
                  }
                />
              </div>
              {errors.owner1Cpf && (
                <p id="owner1Cpf-error" className="input-error">
                  {errors.owner1Cpf}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="owner2Cpf">Owner 2 CPF usage</label>
              <div className="currency-input">
                <span>S$</span>
                <input
                  id="owner2Cpf"
                  name="owner2Cpf"
                  type="text"
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="Usage + accrued interest"
                  value={formValues.owner2Cpf}
                  onChange={handleAmountChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.owner2Cpf)}
                  aria-describedby={
                    errors.owner2Cpf ? "owner2Cpf-error" : undefined
                  }
                />
              </div>
              {errors.owner2Cpf && (
                <p id="owner2Cpf-error" className="input-error">
                  {errors.owner2Cpf}
                </p>
              )}
            </div>

            {hasErrors && (
              <div className="form-error-banner" role="alert">
                Please correct the highlighted fields. Only numerical values are
                accepted.
              </div>
            )}
          </form>

          <aside className="financial-summary" aria-live="polite">
            <div className="summary-heading">
              <p>Estimated calculation</p>
              <h3>Sales proceeds summary</h3>
            </div>

            <div className="summary-block">
              <div className="summary-row">
                <span>HDB sale price</span>
                <strong>{formatCurrency(calculations.salePrice)}</strong>
              </div>

              <div className="summary-row deduction">
                <span>Owner 1 CPF refund</span>
                <strong>- {formatCurrency(calculations.owner1Cpf)}</strong>
              </div>

              <div className="summary-row deduction">
                <span>Owner 2 CPF refund</span>
                <strong>- {formatCurrency(calculations.owner2Cpf)}</strong>
              </div>
            </div>

            <div className="summary-total gross-gain">
              <span>Gross gain</span>
              <strong>{formatCurrency(calculations.grossGain)}</strong>
            </div>

            <div className="expenses-card">
              <h4>Estimated expenses</h4>

              <div className="summary-row">
                <span>
                  Resale submission
                  <small>
                    {hdbType === "1-room" || hdbType === "2-room"
                      ? "1 or 2-room flat"
                      : "3-room flat and above"}
                  </small>
                </span>
                <strong>{formatCurrency(resaleSubmissionFee)}</strong>
              </div>

              <div className="summary-row">
                <span>
                  Lawyer fee
                  <small>Subject to individual case</small>
                </span>
                <strong>{formatCurrency(LAWYER_FEE)}</strong>
              </div>

              <div className="summary-row expenses-total">
                <span>Total expenses</span>
                <strong>{formatCurrency(calculations.totalExpenses)}</strong>
              </div>
            </div>

            <div
              className={`net-profit ${
                calculations.netProfit < 0 ? "negative" : ""
              }`}
            >
              <span>Estimated Net Cash Return</span>
              <strong>{formatCurrency(calculations.netProfit)}</strong>
            </div>

            <div className="financial-caveat">
              <strong>Important:</strong> The estimated net profit excludes
              agent commission and any other applicable costs. Lawyer fees are
              indicative and subject to the individual case.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Projects;