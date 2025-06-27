"use client";

import React from "react";
import CallButton from "@/components/ui/CallButton";
import WhatsAppButton from "@/components/ui/button-whatsapp";

export default function SpecialtyActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <CallButton label="Call Now" />
      <WhatsAppButton />
    </div>
  );
}
