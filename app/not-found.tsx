export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="font-display text-2xl text-brown-dark sm:text-3xl">
        Invitación no disponible
      </p>
      <p className="mt-4 max-w-md font-serif text-ink/75">
        Para ver la invitación necesitás el enlace completo que te compartimos (incluye el tipo de
        invitación en la dirección).
      </p>
      <p className="mt-8 font-serif text-sm text-ink/50">
        Si creés que es un error, contactanos por el mismo medio en que recibiste la invitación.
      </p>
    </div>
  );
}
