﻿using System;


namespace Ofertas.Comum.Commands
{
    public class GenericCommandResult : ICommandResult
    {
        public GenericCommandResult(bool sucesso, string mensagem, object data)
        {
            Sucesso = sucesso;
            Mensagem = mensagem;
            Data = data;
        }

        public bool Sucesso { get; private set; }

        public string Mensagem { get; private set; }

        public Object Data { get; private set; }


    }
}
