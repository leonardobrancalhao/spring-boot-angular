package com.leonardobrancalhao.financeiro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leonardobrancalhao.financeiro.model.Lancamento;
import com.leonardobrancalhao.financeiro.service.LancamentoService;

@RestController
@RequestMapping(path = "lancamentos")
@CrossOrigin("*")
public class LancamentoController {

	@Autowired
	private LancamentoService service;

	@GetMapping
	public ResponseEntity<?> listar() {
		return new ResponseEntity<>(service.listar(), HttpStatus.OK);
	}
	
	@GetMapping(path = "/{id}")
	public ResponseEntity<?> listar(@PathVariable Integer id) {
		return new ResponseEntity<>(service.listar(id), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<?> salvar(@RequestBody Lancamento lancamento) {
		service.salvar(lancamento);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
