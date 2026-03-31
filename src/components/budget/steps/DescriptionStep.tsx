import { UseFormRegister, FieldErrors, UseFormWatch, UseFormSetValue } from "react-hook-form";
import { BudgetFormData } from "@/lib/validations";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Upload, FileText, X } from "lucide-react";

interface DescriptionStepProps {
  register: UseFormRegister<BudgetFormData>;
  errors: FieldErrors<BudgetFormData>;
  watch: UseFormWatch<BudgetFormData>;
  setValue: UseFormSetValue<BudgetFormData>;
  formData: BudgetFormData;
}

export function DescriptionStep({ register, errors, watch, setValue }: DescriptionStepProps) {
  const selectedFiles = watch("files") as FileList | undefined;

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const removeFile = (indexToRemove: number) => {
    if (!selectedFiles) return;
    const dt = new DataTransfer();
    for (let i = 0; i < selectedFiles.length; i++) {
      if (i !== indexToRemove) {
        dt.items.add(selectedFiles[i]);
      }
    }
    setValue("files", dt.files, { shouldValidate: true });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Cuéntanos más sobre tu proyecto</h3>
        <div className="space-y-2">
          <Label htmlFor="description" className={errors.description ? "text-red-600" : ""}>
            Descripción del trabajo
          </Label>
          <Textarea
            id="description"
            placeholder="Ej: Necesito reformar un baño de 5m2, cambiar azulejos y plato de ducha..."
            className={errors.description ? "border-red-500 bg-red-50 focus-visible:ring-red-500" : ""}
            {...register("description")}
          />
          {errors.description && (
            <p className="text-sm font-medium text-red-500">{errors.description.message as string}</p>
          )}
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t">
        <Label>Adjuntar fotos o planos (opcional)</Label>
        <div className="flex flex-col w-full">
          <label
            htmlFor="files"
            className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
              errors.files 
                ? "border-red-500 bg-red-50 hover:bg-red-100" 
                : "bg-neutral-50 hover:bg-neutral-100 border-neutral-300"
            }`}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className={`w-8 h-8 mb-2 ${errors.files ? "text-red-500" : "text-neutral-500"}`} />
              <p className={`mb-2 text-sm ${errors.files ? "text-red-600" : "text-neutral-500"}`}>
                <span className="font-semibold">Haz clic para subir</span> o arrastra archivos
              </p>
              <p className={`text-xs ${errors.files ? "text-red-500" : "text-neutral-400"}`}>
                JPG, PNG o PDF (Máx. 60MB)
              </p>
            </div>
            <Input
              id="files"
              type="file"
              multiple
              className="hidden"
              accept=".jpg,.jpeg,.png,.webp,.pdf"
              {...register("files")}
            />
          </label>
          
          {errors.files && (
            <p className="text-sm font-medium text-red-500 mt-2">
              {errors.files.message as string}
            </p>
          )}

          {selectedFiles && selectedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-neutral-700">
                Archivos adjuntos ({selectedFiles.length}):
              </p>
              <ul className="space-y-2">
                {Array.from(selectedFiles).map((file, index) => (
                  <li 
                    key={`${file.name}-${index}`} 
                    className="flex items-center justify-between p-3 bg-white border border-neutral-200 rounded-md shadow-sm"
                  >
                    <div className="flex items-center space-x-3 overflow-hidden">
                      <FileText className="w-5 h-5 text-primary shrink-0" />
                      <div className="truncate">
                        <p className="text-sm font-medium text-neutral-700 truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        removeFile(index);
                      }}
                      className="p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                      title="Eliminar archivo"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}