package com.leonardobrancalhao.financeiro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leonardobrancalhao.financeiro.model.Lancamento;
import com.leonardobrancalhao.financeiro.repository.LancamentoRepository;

@Service
public class LancamentoService {

	@Autowired
	private LancamentoRepository repository;

	public List<Lancamento> listar() {
		return repository.findAll();
	}

	public Lancamento listar(Integer id) {
		if (id == null || id <= 0) {
			return null;
		}

		return repository.findById(id).get();
	}

	public void salvar(Lancamento lancamento) {
		if (lancamento == null) {
			return;
		}
		
		if(lancamento.getNome() == null) {
			return;
		}
		
		repository.save(lancamento);
	}

}
