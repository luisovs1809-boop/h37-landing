import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso de Agendas H37.",
};

export default function TerminosPage() {
  return (
    <LegalLayout title="Términos y condiciones" updated="3 de mayo de 2026">
      <p>
        Bienvenido a <strong>Agendas H37</strong>, un producto de Grupo H37, con domicilio fiscal en Querétaro, México. Al adquirir y utilizar el software te sujetas a los siguientes términos y condiciones.
      </p>

      <h2>1. Objeto</h2>
      <p>
        Agendas H37 es un sistema de software para la gestión de citas, clientes, comisiones y reportes orientado a barberías, salones de belleza y negocios similares. La compra otorga al cliente una licencia perpetua e intransferible de uso conforme a estos términos.
      </p>

      <h2>2. Modelo de licencia</h2>
      <ul>
        <li>El precio publicado es de <strong>$5,999 MXN (pesos mexicanos)</strong>, en una sola exhibición.</li>
        <li>La licencia es <strong>de por vida</strong> a nombre del titular registrado en la compra.</li>
        <li>Incluye <strong>actualizaciones de software de por vida</strong> sin costo adicional.</li>
        <li>Incluye <strong>soporte por correo electrónico</strong> a <a href="mailto:admon@grupoh37.tech">admon@grupoh37.tech</a> en horario hábil de lunes a viernes.</li>
        <li>Incluye <strong>instalación y configuración inicial</strong> del sistema en la infraestructura acordada.</li>
        <li>La licencia es para uso del negocio del titular y sus sucursales declaradas. La sublicencia, reventa o redistribución del software requiere autorización expresa por escrito.</li>
      </ul>

      <h2>3. Hosting e infraestructura</h2>
      <p>
        El software requiere infraestructura para operar (servidor, base de datos, dominio, servicio de correo transaccional). Las condiciones específicas de hosting, costos asociados y responsabilidades operativas se acuerdan de manera individual con cada cliente al momento de la contratación.
      </p>

      <h2>4. Datos del cliente</h2>
      <p>
        Toda la información que el cliente capture en el sistema (clientes, citas, ingresos, configuración) es de su propiedad. El cliente puede solicitar la <strong>exportación íntegra</strong> de su información en formato CSV en cualquier momento, sin costo, dentro de los 7 días hábiles siguientes a la solicitud.
      </p>

      <h2>5. Disponibilidad del servicio</h2>
      <p>
        Hacemos esfuerzos razonables para mantener el servicio disponible 24/7. No nos hacemos responsables por interrupciones derivadas de fallas en proveedores de infraestructura externos, mantenimientos programados con previo aviso, o causas de fuerza mayor.
      </p>

      <h2>6. Limitación de responsabilidad</h2>
      <p>
        Agendas H37 se entrega &quot;como es&quot;. Aunque nos esforzamos por mantener el sistema funcionando correctamente, no garantizamos que esté libre de errores ni que cumpla con expectativas particulares no documentadas. La responsabilidad máxima de Grupo H37 derivada del uso del software no excederá el monto pagado por la licencia.
      </p>

      <h2>7. Propiedad intelectual</h2>
      <p>
        Todos los derechos de propiedad intelectual sobre el software, código fuente, diseño visual, marca &quot;Agendas H37&quot; y materiales asociados son propiedad exclusiva de Grupo H37. La compra de la licencia no transfiere derechos de autor sobre el software.
      </p>

      <h2>8. Modificaciones</h2>
      <p>
        Nos reservamos el derecho de actualizar estos términos. Los cambios serán notificados al correo registrado por el cliente con al menos 15 días de anticipación.
      </p>

      <h2>9. Contacto y jurisdicción</h2>
      <p>
        Cualquier duda, reclamo o solicitud relacionada con estos términos debe dirigirse a <a href="mailto:admon@grupoh37.tech">admon@grupoh37.tech</a>. Las partes se someten a las leyes y tribunales competentes en la ciudad de Querétaro, Querétaro, México.
      </p>
    </LegalLayout>
  );
}
