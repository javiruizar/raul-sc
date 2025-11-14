"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { budgetFormSchema, type BudgetFormData } from "@/lib/validations";
import { ServiceTypeStep } from "./steps/ServiceTypeStep";
import { DescriptionStep } from "./steps/DescriptionStep";
import { ContactDataStep } from "./steps/ContactDataStep";
import { SummaryStep } from "./steps/SummaryStep";

const steps = [
  { id: 1, name: "Tipo de Servicio", component: ServiceTypeStep },
  { id: 2, name: "Descripción", component: DescriptionStep },
  { id: 3, name: "Tus Datos", component: ContactDataStep },
  { id: 4, name: "Resumen", component: SummaryStep },
];

export function BudgetForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
  } = useForm<BudgetFormData>({
    resolver: zodResolver(budgetFormSchema),
    mode: "onChange",
  });

  const formData = watch();

  const nextStep = async () => {
    let fieldsToValidate: (keyof BudgetFormData)[] = [];

    if (currentStep === 1) {
      fieldsToValidate = ["serviceType"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["description"];
    } else if (currentStep === 3) {
      fieldsToValidate = ["name", "email", "phone"];
    }

    const isValid = await trigger(fieldsToValidate);

    if (isValid && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onSubmit = async (data: BudgetFormData) => {
    setIsSubmitting(true);

    try {
      // TODO: Implementar llamada a API route
      // const response = await fetch("/api/presupuesto", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });

      // Simulación de envío
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error al enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (currentStep / steps.length) * 100;
  const CurrentStepComponent = steps[currentStep - 1].component;

  if (submitSuccess) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h2 className="font-heading text-3xl font-bold text-secondary mb-4">
            ¡Solicitud Enviada!
          </h2>
          <p className="text-lg text-neutral-800/80 mb-6">
            Hemos recibido tu solicitud de presupuesto correctamente.
          </p>
          <div className="bg-neutral-50 p-6 rounded-lg mb-6">
            <p className="text-sm text-neutral-800/70 mb-2">
              <strong>¿Qué sigue ahora?</strong>
            </p>
            <ul className="text-sm text-neutral-800/70 space-y-2 text-left">
              <li className="flex items-start">
                <span className="text-primary mr-2">1.</span>
                <span>Revisaremos tu solicitud en las próximas 24-48 horas</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">2.</span>
                <span>Te contactaremos para aclarar cualquier detalle</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">3.</span>
                <span>Te enviaremos un presupuesto detallado</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <a href="/">Volver al Inicio</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/proyectos">Ver Proyectos</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex items-center ${
                step.id < steps.length ? "flex-1" : ""
              }`}
            >
              <div
                className={`flex items-center justify-center h-10 w-10 rounded-full border-2 font-semibold transition-colors ${
                  step.id < currentStep
                    ? "bg-primary border-primary text-white"
                    : step.id === currentStep
                    ? "border-primary text-primary"
                    : "border-neutral-300 text-neutral-400"
                }`}
              >
                {step.id < currentStep ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  step.id
                )}
              </div>
              {step.id < steps.length && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    step.id < currentStep ? "bg-primary" : "bg-neutral-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`text-center ${
                step.id === currentStep
                  ? "text-primary font-semibold"
                  : "text-neutral-600"
              }`}
              style={{ width: `${100 / steps.length}%` }}
            >
              {step.name}
            </div>
          ))}
        </div>
        <Progress value={progress} className="mt-4" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardContent className="p-8">
            <CurrentStepComponent
              register={register}
              errors={errors}
              watch={watch}
              setValue={setValue}
              formData={formData}
            />
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1 || isSubmitting}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Anterior
          </Button>

          {currentStep < steps.length ? (
            <Button type="button" onClick={nextStep} disabled={isSubmitting}>
              Siguiente
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
