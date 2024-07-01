'use client'
import * as z from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import InputText from '@/app/shared/form/input-text';
import InputSelect from '@/app/shared/form/input-select';

export default function CreateFileTraining(){

    const requiredString = {
      required_error: "Este campo es Requerido",
      invalid_type_error: "Este campo debe ser un texto",
    }

    const requiredNumber = {
      required_error: "Este campo es Requerido",
      invalid_type_error: "Este campo debe ser un numero",
    }

    const FormSchema = z.object({
      modelGeneratorData: z.string(requiredString)
        .min(3, { message: "Los nombres debe tener mas de 3 caracteres" }),
      name: z.string(requiredString)
        .min(3, { message: "Los apellidos debe tener mas de 3 caracteres" }),
      type_answer: z.string(requiredNumber)
        .min(5, { message: "La Cedula esta incompleta" }),
      role_system: z.string(requiredString)
        .min(3, { message: "El nombre de la Empresa debe tener mas de 3 caracteres" }),
    })

    const defaultValues = {
      modelGeneratorData: '',
      name: '',
      type_answer: '',
      role_system: '',
    }

    const optionsAnswer: { label: string, value: string }[] = [
      {
      label: 'All: The AI defines length and tokens of responses.',
      value: 'alls'
      },
      {
      label: 'Short: Reduced and concise responses.',
      value: 'short'
      },
      {
      label: 'Long: Extensive and well-explained responses.',
      value: 'long_explained'
      }
    ]

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
  } = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues
  })

  function submitForm(event: any) {
    console.log('event form ', event )
    const form = new FormData();
    form.append('nombres', event.nombres);
    form.append('apellidos', event.apellidos);
    form.append('cedula', event.cedula);
    form.append('nombreEmpresa', event.nombreEmpresa);
    form.append('nit', event.nit);
    form.append('celular', event.celular);
    form.append('telefono', event.telefono);
    form.append('direccion', event.direccion);
    form.append('ciudad', event.ciudad);
    form.append('departamento', event.departamento);
    form.append('email', event.email);

    form.append('vendeExcel', event.vendeExcel);
    form.append('outsourcing', event.outsourcing);
    form.append('especialista', event.especialista);
    form.append('docente', event.docente);
    form.append('representaCentroEducativo', event.representaCentroEducativo);
    form.append('estaNegocio', event.estaNegocio);

    form.append('nroExcel', event.nroExcel);
    form.append('nroClientes', event.nroClientes);
    form.append('enteroColduty', event.enteroColduty);

    //sendData

}

    return(
        <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-4 mx-auto">

    <div className="mx-auto max-w-2xl">
      <div className="mt-5 p-4 relative bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">

        <p className="text-2xl text-gray-800 pb-2 font-bold sm:text-2xl dark:text-white">
          Crear Archivos de Entrenamiento
        </p>

        <form  onSubmit={handleSubmit(submitForm)}>

        <InputText 
          label="Name" 
          placeholder="Chat for clients" 
          id="name" 
          name="name" 
          type="text"
          registerZod={register}
          errorMessage={errors.name ? errors.name?.message: ''}
          require={true}
        />

        < InputSelect
          label="Type of responses you want to get" 
          placeholder="Select an option"
          id="type_answer" 
          name="type answer" 
          options={optionsAnswer}
          registerZod={register}
          errorMessage={errors.type_answer ? errors.type_answer?.message : ''}
          require={true}
        />

        <InputText 
          label="System Role for AI" 
          placeholder="You are a salesperson, you advise people and companies on how to insure their possessions and people, you are attentive and very friendly."
          id="role_system" 
          name="role_system" 
          type="text"
          registerZod={register}
          errorMessage={errors.role_system ? errors.role_system?.message: ''}
          require={true}
        />

          {/* <app-input 
            [control]="'modelGeneratorData'" 
            [inputType]="'text'" 
            [label]="'Modelo de AI que generará los Documentos'"
            [tooltip]="'
            Para mejores resultados recomendamos usar los Últimos modelos lanzados.'"
            [type]="'select'" 
            [formGroup]="formTrain"
            [selectOption]="(optionsModelGenerator$ | async) || []"
            [errorMessage]="'Este modelo de AI esta mal.'">
          </app-input>
          <small className="text-gray-500">Este modelo sera quien tomara tus documentos y creara los archivos <b>.jsonl</b> que despues podras usar para entrenar un modelo.</small>
          <app-input 
            [control]="'name'" 
            [inputType]="'text'"
            [placeholder]="'Bot de venta'"
            [label]="'Nombre del Archivo a crear'"
            [type]="'text'" 
            [formGroup]="formTrain" 
            [errorMessage]="'El Nombre esta mal'">
          </app-input>

          <app-input 
            [control]="'type_answer'" 
            [inputType]="'text'" 
            [label]="'Tipo de respuestas que deseas obtener'"
            [tooltip]="'
            Segun este tipo de respuesta el modelo aprendera como debe contestar, si sera mas explicativo o sera más corto en sus respuestas.'"
            [type]="'select'" 
            [formGroup]="formTrain"
            [selectOption]="optionsAnswer"
            [errorMessage]="'El tipo de respuesta esta mal'">
          </app-input>


          <app-input 
            [control]="'role_system'" 
            [inputType]="'text'" 
            [label]="'Rol de Sistema para la IA'"
            [type]="'textarea'"
            [tooltip]="'Rol que debera tomar la IA al recibir el entrenamiento, decirle que es un vendedor, asesor, docente o cualquier rol que se requiera.'" 
            [formGroup]="formTrain"
            [placeholder]="'Eres un vendedor de seguros, asesoras personas y empresas sobre como asegurar sus posesiones y personas, eres atento  muy amable.'"
            [errorMessage]="'Este Rol del Sistema esta mal'">
          </app-input> */}

          <div className="mt-6 grid">
            <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              Crear Archivos
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

    )

}