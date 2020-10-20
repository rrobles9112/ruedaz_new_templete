<template>
  <div class="container my-5">
    <div class="row mb-5">
      <div class="col-12">
        <a-steps>
          <a-step
            v-for="(item, index) in steps"
            :key="index"
            :title="item.title"
          />
        </a-steps>
      </div>
      <div class="col-12 col-md-3 d-flex flex-grow-1">
        <div class="card py-3 px-3">
          <div class="my-3" style="width: fit-content;">
            <img :src="require('@/assets/img/ruedaz/promociones/elige.svg')" />
          </div>
          <h5 class="titulo-paso">Elige</h5>
          <p class="textp-paso">
            Elige el paquete de descuento que más se ajuste a tus necesidades
          </p>
        </div>
      </div>
      <div class="col-12 col-md-3 d-flex flex-grow-1">
        <div class="card py-3 px-3">
          <div class="my-3" style="width: fit-content;">
            <img
              :src="require('@/assets/img/ruedaz/promociones/ingresa.svg')"
            />
          </div>
          <h5 class="titulo-paso">Ingresa</h5>
          <p class="textp-paso">
            Si ya estás registrado en la app Ruedaz puedes usar tu usuario y
            contraseña para iniciar sesión. Si eres un usuario nuevo,
            ¡bienvenido! Regístrate a Ruedaz.
          </p>
        </div>
      </div>
      <div class="col-12 col-md-3 d-flex flex-grow-1">
        <div class="card py-3 px-3">
          <div class="my-3" style="width: fit-content;">
            <img :src="require('@/assets/img/ruedaz/promociones/paga.svg')" />
          </div>
          <h5 class="titulo-paso">Paga</h5>
          <p class="textp-paso">
            Agrega un medio de pago que puede ser una tarjeta de crédito o una
            tarjeta débito con CVV. Pagas y ¡listo!
          </p>
        </div>
      </div>
      <div class="col-12 col-md-3 d-flex flex-grow-1">
        <div class="card py-3 px-3">
          <div class="my-3" style="width: fit-content;">
            <img
              :src="require('@/assets/img/ruedaz/promociones/activacion.svg')"
            />
          </div>
          <h5 class="titulo-paso">Activa</h5>
          <p class="textp-paso">
            Activa el/los paquete/s de suscripción que adquiriste en el momento
            que tú prefieras desde la web en tu cuenta.
          </p>
        </div>
      </div>
    </div>
    <h4 class="title-promo mb-4">Términos y condiciones</h4>
    <ul class="mb-3">
      <li>
        <span>
          Promoción válida para compras efectuadas en la página web de Ruedaz
          del <b>15 de Mayo 2020</b> hasta el <b> 5 de Junio de 2020</b>.
        </span>
      </li>
      <li>
        <span> Compra y activación <b>sólo por página Web.</b></span>
      </li>
      <li>
        <span>
          El plazo máximo para activar la promoción es el
          <b>31 de diciembre de 2020</b>.
        </span>
      </li>
      <li>
        <span>
          Sólo se permite la compra de una promoción
          <b>(Promo Dúo o Triple)</b> por placa.
        </span>
      </li>
      <li>
        <span>
          La activación de la promoción aplica para meses continuos. No es
          posible congelar ningún mes luego de realizada la activación, ni
          tampoco podrá activarse para meses discontinuos o con intervalos entre
          ellos.
        </span>
      </li>
      <li>
        <span>
          Después de vencida la promoción, el valor de la suscripción será el
          vigente al de la fecha efectiva de compra de la misma.
        </span>
      </li>
      <li>
        <span>
          El valor pagado por la promoción no se reembolsará en caso de que el
          usuario no utilice los servicios de parqueo en las fechas de
          activación disponibles.
        </span>
      </li>
      <li>
        <span>
          El cliente solo podrá cambiar UNA vez su placa para activar su
          promoción .
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TermsAndConditions",
  components: {},
  data() {
    return {
      steps: [
        {
          title: "",
          content: "",
        },
        {
          title: "",
          content: "",
        },
        {
          title: "",
          content: "",
        },
        {
          title: "",
          content: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
li::marker {
  unicode-bidi: isolate;
  font-variant-numeric: tabular-nums;
  text-transform: none;
}

.title-promo {
  font-size: 30px;
  text-align: center;
}
</style>
