"use client";

import { PaymentFormInputs, paymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {};

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs text-gray-500 font-medium"
        >
          Name on Card
        </label>
        <input
          className="border-b border-gray-200 outline-none text-sm"
          type="text"
          id="cardHolder"
          placeholder="Ashok Kumar"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-sm text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          Card Number
        </label>
        <input
          className="border-b border-gray-200 outline-none text-sm"
          type="text"
          id="cardNumber"
          placeholder="4242424242424242"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-sm text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="expiry" className="text-xs text-gray-500 font-medium">
          Expiry Date
        </label>
        <input
          className="border-b border-gray-200 outline-none text-sm"
          type="text"
          id="expiry"
          placeholder="mm/yy"
          {...register("expiry")}
        />
        {errors.expiry && (
          <p className="text-sm text-red-500">{errors.expiry.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          CVV
        </label>
        <input
          className="border-b border-gray-200 outline-none text-sm"
          type="password"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-sm text-red-500">{errors.cvv.message}</p>
        )}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Image
          src="/klarna.png"
          alt="klarna"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/cards.png"
          alt="cards"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          alt="stripe"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-200 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        Checkout
        <ShoppingCart className="w-3 h-3" />
      </button>
    </form>
  );
};

export default PaymentForm;
