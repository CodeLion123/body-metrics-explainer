// BMI Calculations and Classifications
export const calculateBMI = (weight: number, height: number): number => {
  // weight in kg, height in cm
  return parseFloat((weight / ((height / 100) ** 2)).toFixed(1));
};

export const getBMICategory = (bmi: number): { category: string; color: string; description: string } => {
  if (bmi < 18.5) {
    return {
      category: 'Underweight',
      color: 'blue',
      description: 'Below healthy weight range. Consider consulting with a healthcare provider.'
    };
  } else if (bmi < 25) {
    return {
      category: 'Normal Weight',
      color: 'green',
      description: 'Within the healthy weight range.'
    };
  } else if (bmi < 30) {
    return {
      category: 'Overweight',
      color: 'yellow',
      description: 'Above healthy weight range. May consider lifestyle changes.'
    };
  } else if (bmi < 35) {
    return {
      category: 'Obese (Class I)',
      color: 'orange',
      description: 'Obese category. Consult healthcare provider for health recommendations.'
    };
  } else if (bmi < 40) {
    return {
      category: 'Obese (Class II)',
      color: 'red',
      description: 'High obesity level. Medical consultation recommended.'
    };
  } else {
    return {
      category: 'Severe Obesity',
      color: 'red',
      description: 'Very high obesity level. Immediate medical consultation recommended.'
    };
  }
};

// Blood Pressure Calculations
export const getBloodPressureCategory = (systolic: number, diastolic: number): { 
  category: string; 
  color: string; 
  description: string;
} => {
  if (systolic < 120 && diastolic < 80) {
    return {
      category: 'Normal',
      color: 'green',
      description: 'Blood pressure is in the normal range.'
    };
  } else if (systolic < 130 && diastolic < 80) {
    return {
      category: 'Elevated',
      color: 'blue',
      description: 'Elevated blood pressure. Monitor regularly and consider lifestyle changes.'
    };
  } else if (systolic < 140 || diastolic < 90) {
    return {
      category: 'Stage 1 Hypertension',
      color: 'yellow',
      description: 'Stage 1 high blood pressure. Consult with healthcare provider.'
    };
  } else if (systolic >= 140 || diastolic >= 90) {
    return {
      category: 'Stage 2 Hypertension',
      color: 'red',
      description: 'Stage 2 high blood pressure. Immediate medical consultation recommended.'
    };
  }
  return {
    category: 'Unknown',
    color: 'gray',
    description: 'Unable to classify blood pressure.'
  };
};

// Waist-to-Hip Ratio
export const calculateWHR = (waist: number, hip: number): number => {
  return parseFloat((waist / hip).toFixed(2));
};

export const getWHRCategory = (whr: number, gender: 'male' | 'female'): { 
  category: string; 
  color: string; 
  description: string;
} => {
  if (gender === 'male') {
    if (whr < 0.9) {
      return {
        category: 'Low Risk',
        color: 'green',
        description: 'Waist-to-hip ratio indicates low health risk.'
      };
    } else if (whr < 0.95) {
      return {
        category: 'Moderate Risk',
        color: 'yellow',
        description: 'Waist-to-hip ratio indicates moderate health risk.'
      };
    } else {
      return {
        category: 'High Risk',
        color: 'red',
        description: 'Waist-to-hip ratio indicates high health risk. Consult healthcare provider.'
      };
    }
  } else {
    if (whr < 0.8) {
      return {
        category: 'Low Risk',
        color: 'green',
        description: 'Waist-to-hip ratio indicates low health risk.'
      };
    } else if (whr < 0.85) {
      return {
        category: 'Moderate Risk',
        color: 'yellow',
        description: 'Waist-to-hip ratio indicates moderate health risk.'
      };
    } else {
      return {
        category: 'High Risk',
        color: 'red',
        description: 'Waist-to-hip ratio indicates high health risk. Consult healthcare provider.'
      };
    }
  }
};
